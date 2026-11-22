/// <reference types="@types/chrome" />
/// <reference types="@crxjs/vite-plugin/client" />

import injectorFile from './injector.ts?script'
import type { ReaderMessage } from './reader/messages'

browser.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
    if (tab.id === undefined) return

    const state = await chrome.storage.session.get(String(tab.id))
    if (state[tab.id]) {
        await browser.tabs.reload(tab.id)
        return
    }

    await browser.scripting.executeScript({
        target: { tabId: tab.id },
        files: [injectorFile],
    })
})

chrome.runtime.onMessage.addListener(
    (message: ReaderMessage, sender, sendResponse) => {
        const tabId = sender.tab?.id
        if (tabId === undefined) return

        if (message.type === 'reader:store' && sender.frameId === 0) {
            chrome.storage.session
                .set({ [tabId]: message.article })
                .then(() => chrome.action.setBadgeText({ tabId, text: 'ON' }))
                .then(() => sendResponse())
            return true
        }

        if (
            message.type === 'reader:load' &&
            sender.url?.split('#')[0] ===
                chrome.runtime.getURL('src/reader/base.html')
        ) {
            chrome.storage.session
                .get(String(tabId))
                .then((state) => sendResponse(state[tabId]))
            return true
        }
    },
)

browser.tabs.onRemoved.addListener(async (tabID) => {
    await browser.storage.session.remove(String(tabID))
})

browser.webNavigation.onCommitted.addListener(async ({ tabId, frameId }) => {
    if (frameId === 0) {
        await browser.storage.session.remove(String(tabId))
        await browser.action.setBadgeText({
            tabId,
            text: 'OFF',
        })
    }
})
