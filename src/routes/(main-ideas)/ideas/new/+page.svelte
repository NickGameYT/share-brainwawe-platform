<script>
  import { applyAction, enhance } from "$app/forms";
  import Icon from "@iconify/svelte";
  import { toast } from "svelte-sonner";

  let loading = false;
  let errors = {}; // Объект для хранения ошибок

  // Функция для обработки ошибок
  const handleError = (result) => {
    if (result.type === "failure") {
      errors = result.data?.errors || {}; // Если есть ошибки, сохраняем их
      toast.error(String(result.data?.message || "Unknown error"));
    } else {
      applyAction(result);
    }
  };
</script>

<section class="min-h-[50vh] mt-10 max-w-xl mx-auto">
  <form
    method="post"
    class="shadow-xl p-14 rounded"
    use:enhance={() => {
      loading = true;

      return async ({ result }) => {
        handleError(result);
        loading = false;
      };
    }}
  >
    <fieldset class="grid gap-5">
      <div class="form-control w-full">
        <span class="label label-text">Заголовок</span>
        <label class="input input-bordered flex items-center gap-2">
          <Icon icon="mdi:lead-pencil" />
          <input
            type="text"
            class="grow input border-0"
            placeholder="Заголовок моей идеи"
            name="title"
            required
          />
        </label>
        <!-- Отображение ошибки для заголовка -->
        {#if errors.title}
          <span class="text-red-500 text-xs">{errors.title[0]}</span>
        {/if}
      </div>

      <div class="form-control w-full">
        <label class="label label-text !justify-start" for="description">
          <Icon icon="mdi:text" class="mr-2" />Описание
        </label>
        <textarea
          id="description"
          class="textarea textarea-bordered w-full min-h-52"
          placeholder="Описание величайшей идеи"
          name="description"
        ></textarea>
        <!-- Отображение ошибки для описания -->
        {#if errors.description}
          <span class="text-red-500 text-xs">{errors.description[0]}</span>
        {/if}
      </div>

      <button
        type="submit"
        class="btn btn-success text-white disabled:btn-disabled"
        disabled={loading}
      >
        {#if loading}
          <span class="loading loading-spinner loading-xs"></span>
          Отправка...
        {:else}
          Отправить
        {/if}
      </button>
    </fieldset>
  </form>
</section>
