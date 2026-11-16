import { parseDocument } from './parsing'
import readerBase from './reader/base.html?raw'

let originalDocument = document

parseDocument(originalDocument).then((parseResult) => {
    document.getElementsByTagName('html')[0].innerHTML = readerBase
})
