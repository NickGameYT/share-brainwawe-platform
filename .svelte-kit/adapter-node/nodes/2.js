import * as server from '../entries/pages/(main-ideas)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main-ideas)/_layout@.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main-ideas)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BP1IvpDc.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js","_app/immutable/chunks/forms.CeeC4T9X.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/stores.Dseear7K.js"];
export const stylesheets = [];
export const fonts = [];
