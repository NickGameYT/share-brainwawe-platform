import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<section class="min-h-[50vh] grid place-content-center"><h1 class="text-xl font-bold" data-svelte-h="svelte-1day7jc">Страница которую вы пытаетесь запросить не найдена</h1> <p class="text-center mb-5">${escape($page.error?.message)}</p> <a href="/ideas" class="btn-link w-fit mx-auto" data-svelte-h="svelte-4n9k20">Вернутся к идеям</a></section>`;
});
export {
  Error as default
};
