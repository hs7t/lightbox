import { process } from './parsing'
import type { ReaderMessage } from './reader/messages'

process(document, chrome.runtime.getURL('src/reader/base.html')).then(
    async ({ article, document: readerDocument }) => {
        await chrome.runtime.sendMessage({
            type: 'reader:store',
            article,
        } satisfies ReaderMessage)

        document.documentElement.replaceWith(readerDocument.documentElement)
    },
)
