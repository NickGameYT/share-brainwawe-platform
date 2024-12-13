import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { J as JWT_SECRET_KEY } from './private-Df8CYuQT.js';
import { d as db } from './prisma-BUWqG89e.js';
import '@prisma/client';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BSw7wBRY.js')).default;
const server_id = "src/routes/(main-ideas)/signup/+page.server.js";
const imports = ["_app/immutable/nodes/9.CP53vw25.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.BRJiNN0q.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-BXGE36p1.js.map
