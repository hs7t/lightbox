<script lang="ts">
    import type { Snippet } from 'svelte'

    let { children, ...rest }: { children: Snippet } = $props()
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
    }
</style>
