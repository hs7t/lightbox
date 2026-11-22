import Defuddle, { type DefuddleResponse } from 'defuddle'
import DOMPurify from 'dompurify'

const allowedAttributes: Record<string, string[]> = {
    A: ['href'],
    IMG: ['src', 'alt'],
}

// DOMPurify allows attributes on every tag; limit each attribute to its tags.
DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
    if (!allowedAttributes[node.nodeName]?.includes(data.attrName)) {
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
        ALLOWED_ATTR: Object.values(allowedAttributes).flat(),
        ALLOW_DATA_ATTR: false,
        ALLOW_ARIA_ATTR: false,
    })

    return parsedDocument
}
