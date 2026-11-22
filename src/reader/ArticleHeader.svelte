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

<header>
    {#if byline}
        <p class="byline">{byline}</p>
    {/if}
    {#if title}
        <h1>{title}</h1>
    {/if}
    {#if description}
        <p class="description">{description}</p>
    {/if}
</header>

<style>
    :global(header > * + *) {
        margin-block-start: 0;
    }

    header {
        display: flex;
        flex-direction: column;
        gap: var(--text-size-1);
    }

    header h1 {
        font-size: var(--text-size-2);
    }

    header .byline,
    header .description {
        color: var(--color-secondary);
        text-align: center;
    }

    header .byline {
        width: 100%;

        font-variant-caps: small-caps;
        font-feature-settings: 'smcp';
    }
</style>
