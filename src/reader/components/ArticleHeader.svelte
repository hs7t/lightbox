<script lang="ts">
    let {
        title,
        bylineProperties,
    }: {
        title: string | undefined
        bylineProperties: (string | undefined)[]
    } = $props()

    let byline = $derived(bylineProperties.filter(Boolean).join(' · '))
</script>

<header class="article-header">
    {#if byline}
        <p class="byline">{byline}</p>
    {/if}
    {#if title}
        <h1 class="title">{title}</h1>
    {/if}
</header>

<style>
    :global(.article-header > * + *) {
        margin: 0;
    }

    .article-header {
        display: flex;
        flex-direction: column;
        gap: var(--text-size-0);

        .title {
            font-size: var(--text-size-2);

            /* Specificity conflict w/ global article rules; need to fix */
        }

        .byline {
            width: 100%;
            color: var(--color-secondary);
            font-variant-caps: small-caps;
            font-feature-settings: 'smcp';
        }
    }
</style>
