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
        font-feature-settings: 'smcp';

        text-align: center;

        margin: 0;
    }

    header .byline,
    header .description {
        color: var(--color-secondary);
    }
</style>
