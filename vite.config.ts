import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import manifest from './manifest.json' with { type: 'json' }

export default defineConfig({
    plugins: [
        svelte({ compilerOptions: { css: 'injected' } }),
        crx({ manifest }),
    ],
    experimental: {
        renderBuiltUrl(filename, { hostType, type }) {
            if (hostType === 'js' && type === 'asset') {
                return {
                    runtime: `chrome.runtime.getURL(${JSON.stringify(encodeURI(filename))})`,
                }
            }
        },
    },
})
