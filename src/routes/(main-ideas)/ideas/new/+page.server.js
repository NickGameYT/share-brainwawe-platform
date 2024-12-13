import db from "$lib/prisma.js";
import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";

const ideaSchema = z.object({
	title: z.string().trim().min(5, { message: "Заголовок слишком короткий" }),
	description: z
		.string()
		.trim()
		.min(10, { message: "Описание слишком короткое" }),
	userId: z
		.string({ required_error: "User ID is required" })
		.min(6, "User ID is too short"),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	// @ts-ignore
	if (!locals.user) {
		redirect(307, "/");
	}

	// @ts-ignore
	return { user: locals.user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		// Проводим валидацию данных с помощью Zod
		const { data, error, success } = ideaSchema.safeParse({
			...form,
			// @ts-ignore
			userId: locals.user.id,
		});

		if (!success) {
			const errors = error.flatten().fieldErrors;
			return fail(400, { errors });
		}

		try {
			await db.idea.create({
				data: {
					title: data.title,
					description: data.description,
					userId: data.userId,
				},
			});
		} catch (/** @type {*} */ _e) {
			console.log("ERROR:", _e);
			return fail(400, { message: _e.message });
		}

		redirect(307, "/ideas");
	},
};
