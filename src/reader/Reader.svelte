<script lang="ts">
    import type { DefuddleResponse } from 'defuddle'
    import Article from './Article.svelte'
    import Tools from './Tools.svelte'

    let { parsedDocument }: { parsedDocument: DefuddleResponse } = $props()
</script>

<div id="app-box">
    <main>
        <Tools></Tools>
        <Article
            articleProperties={{
                title: parsedDocument.title,
                description: parsedDocument.description,
                author: parsedDocument.author,
                date: parsedDocument.published
                    ? new Date(parsedDocument.published)
                    : undefined,
                site: parsedDocument.site,
            }}
        >
            {@html parsedDocument.content}
        </Article>
    </main>
</div>

<style>
    #app-box {
        width: 100dvw;
        height: 100dvh;
        overflow-y: scroll;

        display: flex;
        justify-content: center;

        padding-block: 10dvh;

        background-color: var(--color-background-secondary);
    }
</style>
