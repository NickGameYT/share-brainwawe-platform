import db from "$lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "$env/static/private";

const loginSchema = z.object({
    email: z.string().email({ message: "Неверный email" }).trim(),
    password: z.string().min(4, { message: "Длина пароля меньше 4 символов" })
});

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const form = Object.fromEntries(await request.formData());

        const parseResult = loginSchema.safeParse(form);
        if (!parseResult.success) {
            const errors = parseResult.error.flatten().fieldErrors;
            return fail(400, { 
                message: "Неверный ввод", 
                errors, 
                values: form 
            });
        }

        const { email, password } = parseResult.data;

        const user = await db.user.findUnique({
            where: { email }
        });

        if (!user) {
            return fail(400, { 
                message: "Неверное имя или пароль", 
                errors: { password: ["Неверные данные"] }, 
                values: form 
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return fail(400, { 
                message: "Неверное имя или пароль", 
                errors: { password: ["Неверные данные"] }, 
                values: form 
            });
        }

        const payload = jwt.sign(
            { id: user.id, email: user.email, name: user.name }, 
            JWT_SECRET_KEY, 
            { expiresIn: '7d' }
        );

        cookies.set("user", payload, { 
            path: "/", 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'lax', 
            maxAge: 60 * 60 * 24 * 7 
        });

        throw redirect(307, '/ideas');
    }
};
