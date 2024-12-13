import { d as db } from './prisma-BUWqG89e.js';
import { e as error, f as fail } from './index-Ddp2AB5f.js';
import '@prisma/client';

async function load({ locals, params }) {
  const idea = await db.idea.findUnique({
    where: { id: params.id },
    include: { user: true }
  });
  if (!idea) {
    error(404, { message: "Идеи больше не существует" });
  }
  idea.votersId = idea.votersId.split(",");
  return { user: locals.user, idea };
}
const actions = {
  default: async ({ locals, params }) => {
    const idea = await db.idea.findUnique({
      where: { id: params.id }
    });
    let voters = [];
    if (idea?.votersId) {
      const splitted = idea?.votersId.split(",");
      voters = voters.concat(splitted);
    }
    voters.push(locals.user?.id);
    try {
      const updated = await db.idea.update({
        where: { id: params.id },
        data: {
          votersId: voters.join(","),
          votes: Number(idea?.votes) + 1
        }
      });
    } catch (_e) {
      console.log(_e);
      return fail(400, { message: _e.message });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cp-7Q0je.js')).default;
const server_id = "src/routes/(main-ideas)/ideas/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/7.D2YiMYdq.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CcxvwYfC.js","_app/immutable/chunks/entry.DaBXfuHJ.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.yfCqbgqr.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-0zCCnOPV.js.map
