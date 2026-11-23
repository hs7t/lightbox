# Lightbox

Lightbox is a nice reader mode for your browser (currently Chromium only).

Built with Svelte, Vite and [CRXJS](https://github.com/crxjs/chrome-extension-tools).

Uses Steph Ango's [Defuddle](https://defuddle.md/) for parsing.

Development features
---

You can quickly build the extension with `npm run build`.

You can run the extension with `npm run dev`. This will build the extension and open a new `$BROWSER` window with the extension loaded!

That assumes your `$BROWSER` variable is set to Chromium. If you don't want to do that, use `npm run dev:chromium` to open a Chromium window with the extension loaded.

There's a part of this project that's vibecoded (sorry!): a reader playground. You can use it to test the reader mode without the whole build-reload-refresh cycle. This wouldn't be necessary if HMR worked in this kind of project, but it doesn't, so it's useful to have this. You can find the playground files at `src/playground`. To run the playground, run `npm run dev:playground` (it will open the page automatically!). These slopped-up files are clearly marked with comments at the top. Feel free to mess with them as they do not get built into the extension!
