<script lang="ts">
    let {
        code,
        language = undefined,
    }: { code: string; language: string | undefined } = $props()
</script>

<pre class="code-block"><code>{code}</code></pre>
