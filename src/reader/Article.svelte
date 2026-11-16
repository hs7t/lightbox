<script lang="ts">
    import type { Snippet } from 'svelte'

    type ArticleProperties = {
        title: string
        description: string
        author: string
        site: string
    }
    let {
        children,
        articleProperties,
    }: { children: Snippet; articleProperties: ArticleProperties } = $props()
</script>

<article>
    <header>
        <p class="byline">
            {articleProperties.author}
        </p>
        <h1>{articleProperties.title}</h1>
        <p class="description">{articleProperties.site}</p>
    </header>
    {@render children?.()}
</article>

<style>
</style>
