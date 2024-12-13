import { r as redirect } from './index-Ddp2AB5f.js';

const actions = {
  logout: ({ cookies }) => {
    cookies.delete("user", { path: "/" });
    redirect(307, "/ideas");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CzdCthEN.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/4.BMvwCQVR.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-D633xBLB.js.map
