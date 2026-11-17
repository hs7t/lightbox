<script lang="ts">
    import type { DefuddleResponse } from 'defuddle'
    import Article from './Article.svelte'
    import Tools from './Tools.svelte'

    let { parsedDocument }: { parsedDocument: DefuddleResponse } = $props()
</script>

<svelte:head>
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

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
