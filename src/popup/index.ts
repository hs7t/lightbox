import { mount } from 'svelte'
import '../app.css'
import Popup from './Popup.svelte'

const target: HTMLElement | null = document.getElementById('app')

if (target) {
    mount(Popup, { target })
}
