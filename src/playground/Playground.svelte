<!-- DANGER: AI code ahead -->
<!-- This file was made fully by AI. There is no craft in it. -->

<script lang="ts">
    import type { DefuddleResponse } from 'defuddle'
    import Reader from '../reader/Reader.svelte'
    import { process } from '../parsing'
    import fixture from './fixture.html?raw'

    let article = $state<DefuddleResponse>()
    let error = $state<string>()

    $effect(() => {
        let current = true
        const document = new DOMParser().parseFromString(fixture, 'text/html')

        // Preview the article directly so Svelte HMR stays in this browser tab.
        process(document, '/src/reader/base.html').then(
            ({ article: parsed }) => {
                if (!current) return
                article = parsed
                error = undefined
            },
            (reason: unknown) => {
                if (current) error = String(reason)
            },
        )

        return () => {
            current = false
        }
    })
</script>

{#if error}
    <p role="alert">Could not parse the playground fixture: {error}</p>
{:else if article}
    <Reader parsedDocument={article} />
{:else}
    <p>Loading the sample article…</p>
{/if}
