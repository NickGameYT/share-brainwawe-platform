import * as server from '../entries/pages/(main-ideas)/ideas/_id_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main-ideas)/ideas/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main-ideas)/ideas/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.BxuDJ5r5.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.BRJiNN0q.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
export const fonts = [];
