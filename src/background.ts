/// <reference types="@types/chrome" />


browser.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
    if (tab?.id == undefined) return;

    const state = await chrome.storage.session.get(String(tab.id));
    const nextState = state[tab.id] === 'ON' ? 'OFF' : 'ON';

    await chrome.storage.session.set({
        [tab.id]: nextState
    });

    await chrome.action.setBadgeText({ // TODO: replac  e this w/ changing icon, badges suck
        tabId: tab.id,
        text: nextState
    });

    if (nextState == 'ON') {
        browser.scripting
            .executeScript({
              target : {tabId: tab.id},
              files : [ "script.js" ],
            })
            .then(() => console.log("Now reading :)"));
    } else {

    }
})

browser.tabs.onRemoved.addListener(async (tabID) => {
    if (browser.storage.session.get(tabID) != undefined) {
        browser.storage.session.set({[tabID]: undefined})
    }
})
