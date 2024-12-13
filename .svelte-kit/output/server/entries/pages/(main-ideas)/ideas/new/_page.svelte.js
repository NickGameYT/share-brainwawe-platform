import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { I as Icon } from "../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors = {};
  return `<section class="min-h-[50vh] mt-10 max-w-xl mx-auto"><form method="post" class="shadow-xl p-14 rounded"><fieldset class="grid gap-5"><div class="form-control w-full"><span class="label label-text" data-svelte-h="svelte-1qg74ny">Заголовок</span> <label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:lead-pencil" }, {}, {})} <input type="text" class="grow input border-0" placeholder="Заголовок моей идеи" name="title" required></label>  ${errors.title ? `<span class="text-red-500 text-xs">${escape(errors.title[0])}</span>` : ``}</div> <div class="form-control w-full"><label class="label label-text !justify-start" for="description">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:text", class: "mr-2" }, {}, {})}Описание</label> <textarea id="description" class="textarea textarea-bordered w-full min-h-52" placeholder="Описание величайшей идеи" name="description"></textarea>  ${errors.description ? `<span class="text-red-500 text-xs">${escape(errors.description[0])}</span>` : ``}</div> <button type="submit" class="btn btn-success text-white disabled:btn-disabled" ${""}>${`Отправить`}</button></fieldset></form></section>`;
});
export {
  Page as default
};
