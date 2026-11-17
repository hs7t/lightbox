<script lang="ts">
    import type { Snippet } from 'svelte'

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

    let getBylineProperties = () => {
        return [
            articleProperties.author,
            articleProperties.date?.toLocaleDateString(),
            articleProperties.site,
        ]
    }
</script>

<article>
    <header>
        <p class="byline">
            {#each getBylineProperties() as bylineProperty, i}
                {#if bylineProperty}
                    {bylineProperty}
                    {#if i < getBylineProperties().length - 1}
                        &nbsp·&nbsp;
                    {/if}
                {/if}
            {/each}
        </p>
        <h1>{articleProperties.title}</h1>
        {#if articleProperties.description}
            <p class="description">{articleProperties.description}</p>
        {/if}
    </header>

    <hr />

    {@render children?.()}
</article>

<style>
    /* Article content */

    :global(h1, h2, h3, h4, h5) {
        font-family: var(--font-reader-headings);
        text-align: center;
        width: 100%;
        line-height: 100%; /* TODO: make variable*/
        font-size: inherit;
    }

    :global(h4, h5) {
        text-align: start;
    }

    :global(h3, h4, h5) {
        font-style: italic;
    }

    :global(p) {
        margin-bottom: 1ch;
    }

    /* Element specifics */

    article {
        width: clamp(10vw, 100ch, 80vw);
        padding: 10%;
        background-color: var(--color-background-primary);

        font-family: var(--font-reader-primary);
        font-size: var(--font-size-reader-primary);
        line-height: var(--line-height-reader-primary);

        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    header {
        display: flex;
        flex-direction: column;
        gap: 2ch;
    }

    header h1 {
        font-size: 3em;
    }

    header .byline {
        width: 100%;

        font-variant-caps: small-caps;
        text-align: center;

        margin: 0;
    }

    header .byline,
    header .description {
        color: var(--color-secondary);
    }
</style>
