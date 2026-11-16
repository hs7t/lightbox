<script lang="ts">
    import type { DefuddleResponse } from 'defuddle'
    import Article from './Article.svelte'

    let { parsedDocument }: { parsedDocument: DefuddleResponse } = $props()
</script>

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
