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
                {/if}{#if i < getBylineProperties().length - 1}
                    &nbsp·&nbsp;
                {/if}
            {/each}
        </p>
        <h1>{articleProperties.title}</h1>
        <p class="description">{articleProperties.description}</p>
    </header>
    {@render children?.()}
</article>

<style>
</style>
