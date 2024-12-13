import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape } from './ssr-DPgA-FGJ.js';
import './client-CnCRRyPd.js';
import { p as page } from './stores-JaXPMA1R.js';
import './exports-CTha0ECg.js';

const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="sticky top-0 bg-white shadow py-3 z-30"><div class="navbar bg-base-100 container mx-auto"><div class="navbar-start" data-svelte-h="svelte-fzdtqx"><a href="/" class="btn btn-ghost text-xl">KKRIT ideas</a></div> ${$page.data.user ? `<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><h3 class="capitalize">Приветствую, ${escape($page.data.user?.name)}</h3></ul></div>` : ``} <div class="navbar-end gap-5"><a href="/ideas" data-svelte-h="svelte-izpxfy">Смотреть идеи</a> ${$page.data.user ? `<a href="/ideas/new" class="btn btn-sm" data-svelte-h="svelte-ot2do5">Поделиться</a> <form action="/?/logout" method="post" class="btn btn-sm btn-error" data-svelte-h="svelte-7pnarv"><button type="submit">Выйти</button></form>` : `<a href="/login" class="btn btn-sm" data-svelte-h="svelte-s7wymz">Войти</a> <a href="/signup" class="btn btn-sm" data-svelte-h="svelte-rtyqx3">Регистрация</a>`}</div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="container mx-auto">${slots.default ? slots.default({}) : ``}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout@.svelte-CFnvtKqE.js.map
