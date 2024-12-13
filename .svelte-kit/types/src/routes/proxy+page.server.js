// @ts-nocheck
import { redirect } from "@sveltejs/kit";

/** */
export const actions = {
	logout:/** @param {import('./$types').RequestEvent} event */  ({ cookies }) => {
		cookies.delete("user", { path: "/" });
		redirect(307, "/ideas");
	},
};
