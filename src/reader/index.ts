import { mount } from 'svelte'
import '../app.css'
import Reader from './Reader.svelte'

const target: HTMLElement | null = document.getElementById('app')

if (target) {
    mount(Reader, { target })
}
