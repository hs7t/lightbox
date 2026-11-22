import { parseDocument } from './parsing'
import type { ReaderMessage } from './reader/messages'

parseDocument(document).then(async (article) => {
    await chrome.runtime.sendMessage({
        type: 'reader:store',
        article,
    } satisfies ReaderMessage)

    const title = document.title
    const head = document.createElement('head')
    const body = document.createElement('body')
    const frame = document.createElement('iframe')

    frame.src = chrome.runtime.getURL('src/reader/base.html')
    frame.title = 'Lightbox reader'
    Object.assign(frame.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        border: '0',
    })

    body.appendChild(frame)
    document.documentElement.removeAttribute('style')
    document.documentElement.replaceChildren(head, body)
    document.title = title
})
