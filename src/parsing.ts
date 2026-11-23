import Defuddle, { type DefuddleResponse } from 'defuddle'
import DOMPurify from 'dompurify'

const globalAttributes = ['id']

const allowedAttributes: Record<string, string[]> = {
    A: ['href', 'name'],
    IMG: ['src', 'alt'],
}

DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
    if (
        !globalAttributes.includes(data.attrName) &&
        !allowedAttributes[node.nodeName]?.includes(data.attrName)
    ) {
        data.keepAttr = false
    }
})

export const parseDocument = async (document: Document) => {
    let parsedDocument: DefuddleResponse = await new Defuddle(document, {
        separateMarkdown: true,
    }).parseAsync()

    parsedDocument.content = DOMPurify.sanitize(parsedDocument.content, {
        ALLOWED_TAGS: [
            'p',
            'h1',
            'h2',
            'h3',
            'h4',
            'strong',
            'em',
            'a',
            'img',
            'figure',
            'figcaption',
            'table',
            'thead',
            'tbody',
            'tr',
            'th',
            'td',
            'ul',
            'ol',
            'li',
            'blockquote',
            'pre',
            'code',
        ],
        ALLOWED_ATTR: [
            ...globalAttributes,
            ...Object.values(allowedAttributes).flat(),
        ],
        ALLOW_DATA_ATTR: false,
        ALLOW_ARIA_ATTR: false,
    })

    return parsedDocument
}

export async function process(document: Document, readerUrl: string) {
    const article = await parseDocument(document)

    const readerDocument = document.implementation.createHTMLDocument(
        document.title,
    )
    const frame = readerDocument.createElement('iframe')

    frame.src = readerUrl
    frame.title = 'Lightbox reader'
    Object.assign(frame.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        border: '0',
    })

    readerDocument.body.append(frame)

    return { article, document: readerDocument }
}
