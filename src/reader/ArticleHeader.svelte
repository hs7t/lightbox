<script>
    let { bylineProperties } = $props()
</script>

<header>
    <p class="byline">
        {#each bylineProperties as bylineProperty, i}
            {#if bylineProperty}
                {bylineProperty}
                {#if i < bylineProperties.length - 1}
                    &nbsp·&nbsp;
                {/if}
            {/if}
        {/each}
    </p>
    <h1>{bylineProperties.title}</h1>
    {#if bylineProperties.description}
        <p class="description">{bylineProperties.description}</p>
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
