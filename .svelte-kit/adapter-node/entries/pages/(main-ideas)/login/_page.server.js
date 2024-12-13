import { d as db } from "../../../../chunks/prisma.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { J as JWT_SECRET_KEY } from "../../../../chunks/private.js";
const loginSchema = z.object({
  email: z.string().email({ message: "Неверный email" }).trim(),
  // Изменено сообщение ошибки
  password: z.string().min(4, { message: "Длина пароля меньше 4 символов" })
});
const actions = {
  default: async ({ request, cookies }) => {
    const form = Object.fromEntries(await request.formData());
    const { data, error, success } = loginSchema.safeParse(form);
    if (!success) {
      const errors = error.flatten().fieldErrors;
      return fail(400, { message: "Неверный ввод", errors, values: form });
    }
    const user = await db.user.findUnique({
      where: { email: data.email }
    });
    try {
      if (!user || !await bcrypt.compare(data.password, user.password)) {
        return fail(400, { message: "Неверное имя или пароль", errors: { password: ["Неверные данные"] }, values: form });
      }
      const payload = jwt.sign(
        { id: user.id, email: user.email, name: user.name },
        JWT_SECRET_KEY
      );
      cookies.set("user", payload, { path: "/", secure: true });
    } catch (_e) {
      return fail(400, { message: _e.message, errors: {}, values: form });
    }
    redirect(307, "/ideas");
  }
};
export {
  actions
};
