import { d as db } from './prisma-BUWqG89e.js';
import { r as redirect, f as fail } from './index-Ddp2AB5f.js';
import { z } from 'zod';
import '@prisma/client';

const ideaSchema = z.object({
  title: z.string().trim().min(5, { message: "Заголовок слишком короткий" }),
  description: z.string().trim().min(10, { message: "Описание слишком короткое" }),
  userId: z.string({ required_error: "User ID is required" }).min(6, "User ID is too short")
});
async function load({ locals }) {
  if (!locals.user) {
    redirect(307, "/");
  }
  return { user: locals.user };
}
const actions = {
  default: async ({ request, locals }) => {
    const form = Object.fromEntries(await request.formData());
    const { data, error, success } = ideaSchema.safeParse({
      ...form,
      // @ts-ignore
      userId: locals.user.id
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
          userId: data.userId
        }
      });
    } catch (_e) {
      console.log("ERROR:", _e);
      return fail(400, { message: _e.message });
    }
    redirect(307, "/ideas");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-J_1-zS4w.js')).default;
const server_id = "src/routes/(main-ideas)/ideas/new/+page.server.js";
const imports = ["_app/immutable/nodes/6.CiTjh3rE.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.BRJiNN0q.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-DshcwEfb.js.map
