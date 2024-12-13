import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-DPgA-FGJ.js';
import './client-CnCRRyPd.js';
import { I as Icon } from './Toaster.svelte_svelte_type_style_lang-OFDfGbkZ.js';
import './exports-CTha0ECg.js';
import './index2-CmaSdYAB.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { idea } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="p-10"><h1 class="text-lg font-bold capitalize mb-2">${escape(idea.title)}</h1> <p class="mb-2 flex items-center gap-1 italic">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:person" }, {}, {})} ${escape(idea?.user.name)}</p> <p class="mb-5 flex items-center gap-1 italic">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:vote" }, {}, {})} ${escape(idea.votes)} голосов</p> <p class="max-w-xl whitespace-pre-wrap">${escape(idea.description)}</p> ${data.user ? `${!idea.votersId?.includes(data.user?.id) ? `<form method="post" class="mt-5"><button class="btn btn-sm btn-accent" ${""}>Голосовать</button></form>` : `<p class="text-gray-400 italic mt-10" data-svelte-h="svelte-11dei22">Вы уже проголосовали</p>`}` : ``}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cp-7Q0je.js.map
