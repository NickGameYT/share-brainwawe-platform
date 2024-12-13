<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import Icon from "@iconify/svelte";
    import { toast } from "svelte-sonner";

    let loading = false;
    let form = {
        message: '',
        errors: {},
        values: {}
    };
</script>

<section class="min-h-[65vh] grid place-content-center">
    <form
        method="post"
        class="shadow-xl p-14 rounded"
        use:enhance={() => {
            loading = true;
            return async ({ result }) => {
                if (result.type === "failure") {
                    toast.error(String(result.data?.message));
                    form = result.data;
                } else {
                    await applyAction(result);
                }
                loading = false;
            };
        }}
    >
        <legend class="font-bold text-xl text-center mb-2">Создать аккаунт</legend>

        {#if form?.message}
            <div class="alert alert-error mb-4">
                <p>{form.message}</p>
            </div>
        {/if}

        <fieldset class="grid gap-4">
            <label class="input input-bordered flex items-center gap-2">
                <Icon icon="mdi:person" />
                <input
                    type="text"
                    class="grow input border-0"
                    placeholder="Имя"
                    name="name"
                    required
                    value={form?.values?.name || ''}
                />
            </label>
            {#if form?.errors?.name}
                <div class="text-red-500 text-sm mt-1">
                    {form.errors.name[0]}
                </div>
            {/if}

            <label class="input input-bordered flex items-center gap-2">
                <Icon icon="mdi:email" />
                <input
                    type="email"
                    class="grow input border-0"
                    placeholder="Почта"
                    name="email"
                    required
                    value={form?.values?.email || ''}
                />
            </label>
            {#if form?.errors?.email}
                <div class="text-red-500 text-sm mt-1">
                    {form.errors.email[0]}
                </div>
            {/if}

            <label class="input input-bordered flex items-center gap-2">
                <Icon icon="mdi:key" />
                <input
                    type="password"
                    class="grow input border-0"
                    placeholder="Пароль"
                    name="password"
                    required
                />
            </label>
            {#if form?.errors?.password}
                <div class="text-red-500 text-sm mt-1">
                    {form.errors.password[0]}
                </div>
            {/if}

            <button
                type="submit"
                class="btn btn-accent disabled:btn-disabled"
                disabled={loading}
            >
                {#if loading}
                    <span class="loading loading-spinner loading-xs"></span>
                {/if}
                Зарегистрироваться
            </button>
        </fieldset>
    </form>
</section>
