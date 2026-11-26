<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLButtonAttributes } from 'svelte/elements'

    let { children, ...rest }: HTMLButtonAttributes & { children: Snippet } =
        $props()
</script>

<button type="button" class="inline-button" {...rest}>
    {@render children()}
</button>

<style>
    button {
        all: unset;
        display: inline-block;
        cursor: pointer;

        color: inherit;
        text-decoration: underline dotted;
        font-family: var(--font-ui-primary);
        font-size: var(--ui-text-size-0);

        width: fit-content;
        height: fit-content;
    }
</style>
