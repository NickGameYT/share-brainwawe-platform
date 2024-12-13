import { c as create_ssr_component, e as escape, b as each } from './ssr-DPgA-FGJ.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section><h1 class="mt-5">Идеи: ${escape(data.ideas.length)}</h1> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">${data.ideas.length ? each(data.ideas, (idea) => {
    return `<div class="card bg-base-100 w-96 shadow-lg"><div class="card-body"><h2 class="font-semibold text-lg">${escape(idea.title)}</h2> <p class="text-sm line-clamp-2 whitespace-pre-wrap">${escape(idea.description)}</p> <div class="card-actions justify-between mt-5"><p>${escape(idea.votes)} голосов</p> <a href="${"/ideas/" + escape(idea.id, true)}" class="btn btn-accent btn-sm">Подробнее</a> </div></div> </div>`;
  }) : `<p class="text-gray-800 italic mt-10" data-svelte-h="svelte-11859y5">Пока еще нет не одной опубликованной идеи, стань первым!
			</p>`}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CCN2LDr4.js.map
