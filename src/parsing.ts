import Defuddle, { type DefuddleResponse } from 'defuddle'

export const parseDocument = async (document: Document) => {
    let parsedDocument: DefuddleResponse = await new Defuddle(document, {
        separateMarkdown: true,
    }).parseAsync()

    return parsedDocument
}
