# EmboldenAtRandom

(If you're an employer please don't judge me on this code! It was written at god knows when in the morning and was my first tangle with Chrome Extension development and jQuery, which lead to some very inefficient code and the storing of tag data within the program itself. If you want to see some of my better work please check out https://github.com/notjoshno/CA3).

### How to install
Video tutorial: https://www.youtube.com/watch?v=_kE8_gFcc58

The process is relatively simple:
* [Download the extension as a .zip](https://github.com/notjoshno/embolden-at-random/archive/master.zip)
* Extract the .zip file into a folder somewhere on your computer. If this folder is deleted your extension will no longer work.
* Go to your [Chrome extensions page](chrome://extensions)
* At the top-right, enable Developer Mode
* At the top-left click "Load unpacked"
* In the explorer window, find and select the folder you extracted the .zip into
* At the top right of chrome, next to the URL bar, there should be a small puzzle icon. This is your extensions options menu.
* Click the puzzle icon, and pin EmboldenAtRandom
* The extension is now installed! Simply navigate to a webpage with a lot of text and click the icon at the top-right to embolden some stuff.

### About the project:
This is a Chrome extension that adds an icon to your taskbar which, when clicked, randomly changes randomly sized chunks of text on a web-page to be bold.
This was inspired by a comment on [Reddit.](https://www.reddit.com/r/ADHD/comments/k2vw05/i_cant_fucking_read/gdxqe3h?utm_source=share&utm_medium=web2x&context=3)

This is the first Chrome extension I've ever made, and it was cobbled together between the hours of 5am-8am.
This is also my first time working with JQuery, and the Chrome extension libraries.
I am also not super-familiar with JavaScript, with Python being my usual language of choice.

Therefore, I invite anyone who can to come and help turn this janky-ass extension into something that works a bit nicer.

### Note:
This extension only changes text contained within `<p></p>` or `<span></span>` tags, and can break some websites' formatting.
If a website doesn't like the extension's reformatting decisions, simply refresh and it will revert to normal.
