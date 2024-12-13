import { d as db } from './prisma-BUWqG89e.js';
import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { J as JWT_SECRET_KEY } from './private-Df8CYuQT.js';
import '@prisma/client';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D_kzdUE7.js')).default;
const server_id = "src/routes/(main-ideas)/login/+page.server.js";
const imports = ["_app/immutable/nodes/8.BbuENyjr.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CcxvwYfC.js","_app/immutable/chunks/entry.DaBXfuHJ.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.yfCqbgqr.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-CBr0HNLn.js.map
