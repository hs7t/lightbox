<script lang="ts">
    import type { Snippet } from 'svelte'
    import ArticleHeader from './ArticleHeader.svelte'

    type ArticleProperties = {
        title: string | undefined
        description: string | undefined
        author: string | undefined
        date: Date | undefined
        site: string | undefined
    }

    let {
        children,
        articleProperties,
    }: { children: Snippet; articleProperties: ArticleProperties } = $props()
</script>

<article class="prose">
    <ArticleHeader
        title={articleProperties.title}
        description={articleProperties.description}
        bylineProperties={[
            articleProperties.author,
            articleProperties.date?.toLocaleDateString(),
        ]}
    />

    <hr />

    {@render children?.()}
</article>

<style>
    * {
        --text-size-0: calc(1rem + 0.2vw);
        --text-size-1: calc(var(--text-size-0) * var(--text-line-height-0));
        --text-size-2: calc(var(--text-size-1) * var(--text-line-height-0));
        --text-size-3: calc(var(--text-size-2) * var(--text-line-height-0));

        --text-size-smaller: calc(var(--text-size-0) - 0.2vw);

        --text-line-height-0: 1.5;
    }

    /* Element specifics */

    .prose {
        width: clamp(10vw, 100ch, 80vw);
        display: flex;
        flex-direction: column;
        padding: 10%;

        box-shadow: 0 0 6.5px 0 rgba(0, 0, 0, 0.25);
        background-color: var(--color-background-primary);

        font-family: var(--font-reader-primary);
        font-size: var(--text-size-0);
        line-height: var(--text-line-height-regular);

        --flow-space: var(--text-size-0);
    }

    /* Article content */

    :global(.prose > * + *) {
        margin-block-start: var(--flow-space);
    }

    :global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5) {
        font-family: var(--font-reader-headings);
        text-align: center;
        width: 100%;
        line-height: 100%; /* TODO: make variable*/
        font-size: inherit;
    }

    :global(.prose h3, .prose h4, .prose h5) {
        text-align: start;
    }

    :global(.prose h4, .prose h5) {
        font-style: italic;
        font-weight: inherit;
    }

    :global(.prose div) {
        display: flex;
        flex-direction: column;
        gap: inherit;
    }

    :global(.prose img) {
        max-width: 100%;
        height: auto;

        background-color: var(--color-background-secondary);
    }

    :global(.prose code) {
        font-family: var(--font-reader-monospace);
        font-size: var(--text-size-smaller);
        line-height: var(--text-line-height-regular);

        background-color: var(--color-background-secondary);
        padding: 0.2em 0.4em;

        border-radius: 0.2em;
    }

    :global(.prose pre > code) {
        all: unset;
    }

    :global(.prose pre) {
        font-family: var(--font-reader-monospace);
        font-size: var(--text-size-smaller);
        line-height: var(--text-line-height-regular);

        background-color: var(--color-background-secondary);
        border-radius: 0.2em;

        padding: 0.5em 1em;
        width: 100%;
        overflow-y: scroll;
    }
</style>
