// @ts-nocheck
import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "$env/static/private";
import db from "$lib/prisma";

const signupSchema = z.object({
  name: z.string().trim().min(2, { message: "Имя слишком короткое" }),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Пароль должен быть не короче 4 символов" }),
});

/** */
export const actions = {
  default:/** @param {import('./$types').RequestEvent} event */  async ({ request, cookies }) => {
    const form = Object.fromEntries(await request.formData());

    // Validate input data
    const { data, error, success } = signupSchema.safeParse(form);
    if (!success) {
      const errors = error.flatten().fieldErrors;
      return fail(400, { message: "Ошибка валидации", errors });
    }

    try {
      // Check if the email is already taken
      const emailExists = await db.user.findUnique({
        where: { email: data.email },
      });
      if (emailExists) {
        return fail(400, { message: "Этот email уже занят!" });
      }
    } catch (_e) {
      console.log(_e);
      return fail(500, { message: _e.message });
    }

    try {
      // Hash the password and create a new user
      const hashedPassword = await bcrypt.hash(data.password, 12);

      const user = await db.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
        },
        select: {
          id: true,
          name: true,
          email: true, // Добавим email, чтобы сохранить его в JWT
        },
      });

      // Create JWT token for the user
      const payload = { id: user.id, name: user.name, email: user.email };

      const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: "1h", // Установите срок действия токена (например, 1 час)
      });

      // Set the token in cookies
      cookies.set("user", token, {
        path: "/",
        httpOnly: true, // Сделать cookie доступной только через HTTP
        secure: process.env.NODE_ENV === "production", // Включить для production
        sameSite: "Strict", // Защита от CSRF
      });
    } catch (_e) {
      console.log(_e.message);
      return fail(400, { message: _e.message });
    }

    // Redirect to ideas page after successful signup
    throw redirect(307, "/ideas");
  },
};
