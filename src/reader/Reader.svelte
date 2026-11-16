<script lang="ts">
    import type { DefuddleResponse } from "defuddle"

    let { parsedDocument }: { parsedDocument: DefuddleResponse } = $props()
</script>

<article>
    {@html parsedDocument}
</article>
