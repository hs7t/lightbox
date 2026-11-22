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
