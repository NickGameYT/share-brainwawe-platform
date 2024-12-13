import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { J as JWT_SECRET_KEY } from "../../../../chunks/private.js";
import { d as db } from "../../../../chunks/prisma.js";
const signupSchema = z.object({
  name: z.string().trim().min(2, { message: "Имя слишком короткое" }),
  email: z.string().email(),
  password: z.string().min(4, { message: "Пароль должен быть не короче 4 символов" })
});
const actions = {
  default: async ({ request, cookies }) => {
    const form = Object.fromEntries(await request.formData());
    const { data, error, success } = signupSchema.safeParse(form);
    if (!success) {
      const errors = error.flatten().fieldErrors;
      return fail(400, { message: "Ошибка валидации", errors });
    }
    try {
      const emailExists = await db.user.findUnique({
        where: { email: data.email }
      });
      if (emailExists) {
        return fail(400, { message: "Этот email уже занят!" });
      }
    } catch (_e) {
      console.log(_e);
      return fail(500, { message: _e.message });
    }
    try {
      const hashedPassword = await bcrypt.hash(data.password, 12);
      const user = await db.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword
        },
        omit: {
          password: true
        }
      });
      const payload = jwt.sign(user, JWT_SECRET_KEY);
      cookies.set("user", payload, { path: "/", secure: true });
    } catch (_e) {
      console.log(_e.message);
      return fail(400, { message: _e.message });
    }
    redirect(307, "/ideas");
  }
};
export {
  actions
};
