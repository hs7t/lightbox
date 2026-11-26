<script lang="ts">
    import { slide } from 'svelte/transition'
    import InlineButton from '../../components/InlineButton.svelte'

    let {
        caption = undefined,
        contents,
    }: { caption: string | undefined; contents: string } = $props()

    let open = $state(false)
</script>

<div class="collapsible">
    <figure>
        <figcaption>{caption ? caption : 'Figure'}</figcaption>

        <InlineButton
            aria-expanded={open}
            onclick={() => (open = !open)}
            class="button"
        >
            {!open ? 'Show figure' : 'Hide figure'}
        </InlineButton>
        {#if open}
            <div class="figure-content" transition:slide>
                {@html contents}
            </div>
        {/if}
    </figure>
</div>

<style>
    figure {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: baseline;

        figcaption {
            grid-column: 1;
        }

        :global(.button) {
            grid-column: 2;
        }

        .figure-content {
            grid-column: 1 / -1;
        }
    }

    :global(figure > *) {
        width: 100%;
    }

    :global(figure > figcaption) {
        font-family: var(--font-ui-primary);
        font-size: var(--ui-text-size-0);
        color: var(--color-secondary);
    }
</style>
