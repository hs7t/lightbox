<script lang="ts">
    import type { Snippet } from 'svelte'
    import ArticleHeader from './components/ArticleHeader.svelte'

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
        --text-line-height-0: 1.65;

        --text-size-0: calc(1rem + 0.25vw);
        --text-size-1: calc(var(--text-size-0) * var(--text-line-height-0));
        --text-size-2: calc(var(--text-size-1) * var(--text-line-height-0));
        --text-size-3: calc(var(--text-size-2) * var(--text-line-height-0));

        --text-size-smaller: calc(var(--text-size-0) - 0.25vw);
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
        line-height: var(--text-line-height-0);

        --flow-space: var(--text-size-0);
    }

    /* Article content */

    .prose :global {
        > * + * {
            margin-block-start: var(--flow-space);
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            font-family: var(--font-reader-headings);
            text-align: center;
            width: 100%;
            line-height: 100%; /* TODO: make variable*/
            font-size: inherit;
        }

        h3,
        h4,
        h5 {
            text-align: start;
        }

        h4,
        h5 {
            font-style: italic;
            font-weight: inherit;
        }

        h1 {
            font-size: var(--text-size-2);
            --flow-space: var(--text-size-2);
        }

        h2 {
            font-size: var(--text-size-1);
            --flow-space: var(--text-size-2);
        }

        img {
            max-width: 100%;
            height: auto;

            background-color: var(--color-background-secondary);
        }

        code {
            font-family: var(--font-reader-monospace);
            font-size: var(--text-size-smaller);
            line-height: var(--text-line-height-0);

            background-color: var(--color-background-secondary);
            padding: 0.2em 0.4em;

            border-radius: 0.2em;
        }

        pre > code {
            all: unset;
        }

        pre {
            font-family: var(--font-reader-monospace);
            font-size: var(--text-size-smaller);
            line-height: var(--text-line-height-0);

            background-color: var(--color-background-secondary);
            border-radius: 0.2em;

            padding: 0.5em 1em;
            width: 100%;
            overflow-y: scroll;
        }

        ul,
        ol {
            padding-inline-start: calc(var(--text-size-0));
        }

        :is(li, ul, ol) > :is(ul, ol) {
            padding-inline-start: calc(
                var(--text-size-0) * var(--text-line-height-0)
            );
        }
    }
</style>
