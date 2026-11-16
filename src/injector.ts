import { mount } from 'svelte'
import { parseDocument } from './parsing'
import readerBase from './reader/base.html?raw'
import Reader from './reader/Reader.svelte'

import './app.css'

let originalDocument = document

parseDocument(originalDocument).then((parseResult) => {
    document.getElementsByTagName('html')[0].innerHTML = readerBase

    const target: HTMLElement | null = document.getElementById('app')

    if (target) {
        mount(Reader, { target, props: { parsedDocument: parseResult } })
    }
})
