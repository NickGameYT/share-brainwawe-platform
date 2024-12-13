import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from './ssr-DPgA-FGJ.js';
import './client-CnCRRyPd.js';
import { I as Icon } from './Toaster.svelte_svelte_type_style_lang-OFDfGbkZ.js';
import './exports-CTha0ECg.js';
import './index2-CmaSdYAB.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = { message: "", errors: {}, values: {} };
  return `<section class="min-h-[65vh] grid place-content-center"><form method="post" class="shadow-xl p-14 rounded"><legend class="font-bold text-xl text-center mb-2" data-svelte-h="svelte-yxepdy">Вход</legend> ${``} <fieldset class="grid gap-4"><label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:email" }, {}, {})} <input type="email" class="grow input border-0" placeholder="Почта" name="email" required${add_attribute("value", form?.values?.email || "", 0)}></label> ${form?.errors?.email ? `<div class="text-red-500 text-sm mt-1">${escape(form.errors.email[0])}</div>` : ``} <label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:key" }, {}, {})} <input type="password" class="grow input border-0" placeholder="Пароль" name="password" required></label> ${form?.errors?.password ? `<div class="text-red-500 text-sm mt-1">${escape(form.errors.password[0])}</div>` : ``} <button type="submit" class="btn btn-accent" ${""}>${``}
                Войти</button></fieldset></form></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D_kzdUE7.js.map
