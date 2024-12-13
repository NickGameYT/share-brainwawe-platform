import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="grid place-content-center min-h-[70dvh] text-center" data-svelte-h="svelte-3x2bk0"><p class="text-sm border px-3 py-2 bg-white rounded-full w-fit mx-auto">Голосуй за интересные идеи!</p> <h1 class="text-6xl text-accent mb-4">KKRIT ideas</h1> <p class="font-light max-w-xl text-center">Платформа для размещения самый интригующих задумок. 
		Воплоти свои идеи в жизнь, и голосуй за идеи других!</p> <div class="max-auto"><a href="/ideas" class="mt-3 btn-accent text-white w-fit btn-sm btn">Смотреть идеи</a></div></section>`;
});
export {
  Page as default
};
