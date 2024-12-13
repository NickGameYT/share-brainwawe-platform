import { d as db } from './prisma-BUWqG89e.js';
import '@prisma/client';

async function load({ locals }) {
  const ideas = await db.idea.findMany({
    orderBy: {
      votes: "desc"
      // Сортировка по количеству голосов, от большего к меньшему
    }
  });
  return { ideas, user: locals.user };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CCN2LDr4.js')).default;
const server_id = "src/routes/(main-ideas)/ideas/+page.server.js";
const imports = ["_app/immutable/nodes/5.CFuiP4fJ.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-CfETf_10.js.map
