import * as server from '../entries/pages/(main-ideas)/signup/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main-ideas)/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main-ideas)/signup/+page.server.js";
export const imports = ["_app/immutable/nodes/9.CP53vw25.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.BRJiNN0q.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.DQwrSZtH.css"];
export const fonts = [];
