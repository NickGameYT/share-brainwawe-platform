import * as server from '../entries/pages/(main-ideas)/ideas/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main-ideas)/ideas/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main-ideas)/ideas/+page.server.js";
export const imports = ["_app/immutable/nodes/5.CFuiP4fJ.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js"];
export const stylesheets = [];
export const fonts = [];
