<script>
	import { page } from "$app/stores";
</script>

<section class="min-h-[50vh] grid place-content-center">
	<h1 class="text-xl font-bold">Страница которую вы пытаетесь запросить не найдена</h1>
	<p class="text-center mb-5">{$page.error?.message}</p>

	<a href="/ideas" class="btn-link w-fit mx-auto">Вернутся к идеям</a>
</section>
