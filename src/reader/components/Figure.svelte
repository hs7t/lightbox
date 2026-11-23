<script lang="ts">
    let { contents }: { contents: string } = $props()
</script>

<figure>
    {@html contents}
</figure>

<style>
    :global(figure) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 1rem 0;
    }

    :global(figure > *) {
        width: 100%;
    }

    :global(figure > figcaption) {
        font-family: var(--font-reader-headings);
        font-size: var(--text-size-smaller);
        text-align: center;
        color: var(--h-dark-gray);
    }
</style>
