import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { I as Icon } from "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = { message: "", errors: {}, values: {} };
  return `<section class="min-h-[65vh] grid place-content-center"><form method="post" class="shadow-xl p-14 rounded"><legend class="font-bold text-xl text-center mb-2" data-svelte-h="svelte-1q4o9l5">Создать аккаунт</legend> ${``} <fieldset class="grid gap-4"><label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:person" }, {}, {})} <input type="text" class="grow input border-0" placeholder="Имя" name="name" required${add_attribute("value", form?.values?.name || "", 0)}></label> ${form?.errors?.name ? `<div class="text-red-500 text-sm mt-1">${escape(form.errors.name[0])}</div>` : ``} <label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:email" }, {}, {})} <input type="email" class="grow input border-0" placeholder="Почта" name="email" required${add_attribute("value", form?.values?.email || "", 0)}></label> ${form?.errors?.email ? `<div class="text-red-500 text-sm mt-1">${escape(form.errors.email[0])}</div>` : ``} <label class="input input-bordered flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:key" }, {}, {})} <input type="password" class="grow input border-0" placeholder="Пароль" name="password" required></label> ${form?.errors?.password ? `<div class="text-red-500 text-sm mt-1">${escape(form.errors.password[0])}</div>` : ``} <button type="submit" class="btn btn-accent disabled:btn-disabled" ${""}>${``}
                Зарегистрироваться</button></fieldset></form></section>`;
});
export {
  Page as default
};
