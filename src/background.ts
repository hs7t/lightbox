/// <reference types="@types/chrome" />
/// <reference types="@crxjs/vite-plugin/client" />

import injectorFile from './injector.ts?script'

browser.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
    if (tab.id === undefined) return

    const state = await chrome.storage.session.get(String(tab.id))
    const nextState = state[tab.id] === 'ON' ? 'OFF' : 'ON'

    if (nextState === 'ON') {
        await browser.scripting.executeScript({
            target: { tabId: tab.id },
            files: [injectorFile],
        })
        console.log('Now reading :)')
    }

    await chrome.storage.session.set({
        [tab.id]: nextState,
    })

    await chrome.action.setBadgeText({
        // TODO: replac  e this w/ changing icon, badges suck
        tabId: tab.id,
        text: nextState,
    })

    if (nextState === 'OFF') {
        await browser.tabs.reload(tab.id)
        console.log('Reloaded page')
    }
})


browser.tabs.onRemoved.addListener(async (tabID) => {
    await browser.storage.session.remove(String(tabID))
})

browser.tabs.onUpdated.addListener(async (tabID, changeInfo) => {
    if (changeInfo.status === 'loading') {
        await browser.storage.session.remove(String(tabID))
        await browser.action.setBadgeText({
            tabId: tabID,
            text: 'OFF',
        })
    }
})
