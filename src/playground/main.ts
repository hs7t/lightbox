// DANGER: AI code ahead
// This file was made fully by AI. There is no craft in it.

import { mount, unmount } from 'svelte'
import Playground from './Playground.svelte'
import '../app.css'

const app = mount(Playground, {
    target: document.getElementById('app')!,
})

if (import.meta.hot) {
    import.meta.hot.dispose(() => unmount(app))
}
