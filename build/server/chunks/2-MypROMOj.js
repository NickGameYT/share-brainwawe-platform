async function load({ locals }) {
  return { user: locals.user };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout@.svelte-CFnvtKqE.js')).default;
const server_id = "src/routes/(main-ideas)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.BP1IvpDc.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/stores.Dseear7K.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-MypROMOj.js.map
