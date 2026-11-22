import type { DefuddleResponse } from 'defuddle'

export type ReaderMessage =
    | { type: 'reader:store'; article: DefuddleResponse }
    | { type: 'reader:load' }
