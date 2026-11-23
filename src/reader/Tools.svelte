<script>
    import InlineButton from '../components/InlineButton.svelte'
</script>

<menu>
    <input type="checkbox" id="show-pictures" />
    <label for="show-pictures">Show pictures</label>
    <InlineButton>More settings</InlineButton>
</menu>

<style>
    menu {
        display: flex;
        padding: 0;

        color: var(--color-secondary);
    }
</style>
