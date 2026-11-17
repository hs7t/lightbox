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

<article>
    <ArticleHeader
        bylineProperties={[
            articleProperties.author,
            articleProperties.date?.toLocaleDateString(),
        ]}
    ></ArticleHeader>

    <hr />

    {@render children?.()}
</article>

<style>
    /* Article content */

    :global(article h1, article h2, article h3, article h4, article h5) {
        font-family: var(--font-reader-headings);
        text-align: center;
        width: 100%;
        line-height: 100%; /* TODO: make variable*/
        font-size: inherit;
    }

    :global(article h3, article h4, article h5) {
        text-align: start;
    }

    :global(article h4, article h5) {
        font-style: italic;
        font-weight: inherit;
    }

    :global(article p) {
        margin-bottom: 1ch;
    }

    :global(article div) {
        all: inherit;
    }

    /* Element specifics */

    article {
        width: clamp(10vw, 100ch, 80vw);
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 10%;

        box-shadow: 0 0 6.5px 0 rgba(0, 0, 0, 0.25);
        background-color: var(--color-background-primary);

        font-family: var(--font-reader-primary);
        font-size: var(--font-size-reader-primary);
        line-height: var(--line-height-reader-primary);
    }
</style>
