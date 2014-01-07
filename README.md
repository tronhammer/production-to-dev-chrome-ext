production-to-dev-chrome-ext
============================

This captures requests made to staging.ontraport.com steal.js file, and moves it from pointing to the production environment to the dev environment.

How to Load
===========
 * Clone this repo to your computer, or copy the files and store them in a folder.
 * In Chrome, Goto the "Window" menu, and click the "Extension" option.
 * The extension page should show up
 * Hit the button "Load unpacked chrome extension" and select the folder you saved the files too
 * Goto staging.ontraport.com (__NOT HTTPS!!__)
 * Observe unminified stack
 
 You can disable the extension from the extensions window at any time to get minified code back.


__WARNING__: Make sure you're not trying to load `https://` version of staging, as it won't fully load!
