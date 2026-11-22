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

<article class="reader-content">
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
    /* Article content */

    :global(
        .reader-content h1,
        .reader-content h2,
        .reader-content h3,
        .reader-content h4,
        .reader-content h5
    ) {
        font-family: var(--font-reader-headings);
        text-align: center;
        width: 100%;
        line-height: 100%; /* TODO: make variable*/
        font-size: inherit;
    }

    :global(.reader-content h3, .reader-content h4, .reader-content h5) {
        text-align: start;
    }

    :global(.reader-content h4, .reader-content h5) {
        font-style: italic;
        font-weight: inherit;
    }

    :global(.reader-content p) {
        margin-bottom: 1ch;
    }

    :global(.reader-content div) {
        display: flex;
        flex-direction: column;
        gap: inherit;
    }

    /* Element specifics */

    .reader-content {
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
