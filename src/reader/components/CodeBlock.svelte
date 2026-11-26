<script lang="ts">
    let {
        code,
        language = undefined,
    }: { code: string; language: string | undefined } = $props()
</script>

<pre class="code-block"><code>{code}</code></pre>

<style>
    pre {
        overflow-y: scroll;
        scrollbar-width: none;
        scrollbar-gutter: stable;
    }

    pre:hover {
        scrollbar-width: thin;
    }

    pre:hover::-webkit-scrollbar {
        width: 2pt;
    }

    /*
        This is a bit of a compromise. Many OSes default to autohiding scrollbars. I agree this looks great,
        but it can make telling whether something's scrollable a difficult. If we show the scrollbar
        on hover and do not otherwise, the browser will do its show-then-hide signifier :)

        Sadly I can't limit this to users who have scrollbar autohide on from CSS
    */
</style>
