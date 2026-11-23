<script lang="ts">
    let {
        title,
        description,
        bylineProperties,
    }: {
        title: string | undefined
        description: string | undefined
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
    {#if description}
        <p class="description">{description}</p>
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
            margin: 0; /* Specificity conflict w/ global article rules; need to fix */
            font-size: var(--text-size-2);
        }

        .byline,
        .description {
            color: var(--color-secondary);
        }
        .byline {
            width: 100%;

            font-variant-caps: small-caps;
            font-feature-settings: 'smcp';
        }
    }
</style>
