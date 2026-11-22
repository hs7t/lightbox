import { mount } from 'svelte'
import type { DefuddleResponse } from 'defuddle'
import Reader from './Reader.svelte'
import type { ReaderMessage } from './messages'
import '../app.css'

chrome.runtime
    .sendMessage({ type: 'reader:load' } satisfies ReaderMessage)
    .then((article: DefuddleResponse | undefined) => {
        if (!article) throw new Error('The article is no longer available.')

        mount(Reader, {
            target: document.getElementById('app')!,
            props: { parsedDocument: article },
        })
        for (const link of document.querySelectorAll<HTMLAnchorElement>(
            'a[href^="#"]',
        )) {
            link.target = '_self'
        }
        document.title = article.title
        document.documentElement.lang = article.language || 'en'
    })
    .catch((error: Error) => {
        document.getElementById('app')!.textContent = error.message
    })
