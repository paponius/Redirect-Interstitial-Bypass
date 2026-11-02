// This is a GreaseMonkey User Script file.
// It contains only the Metadata Block.
// All JavaScript code is in separate files, to make development more portable and easier.
//
// Safety
// Greasy Fork (greasyfork.org) requires that the whole code is in this file, so that user can review what they are installing.
// I do that for simple scripts up to 100 lines long. But I argue that it's not practical for longer scripts.
// And on the contrary, when a program is split into multiple files based on semantic, it's much easier to inspect and understood.
// If someone really want to inspect such longer script, they'll probably do so in DevTools.
// And in GM, external scripts are concatenated together with this file anyway.
//
// Performance
// External JS files (which are included using require Key in metadata) are cached. They are downloaded only once per version change.
//
// Advantage of external files in development
// External JS files can be edited in external IDE. (Code in this file can not) This makes development much easier.
// One file can be Grease Monkey specific, while the rest can be generic. That same files can than be used within a WebExtension.
// v2.1


// TEMPLATE
// This text block is to be removed from scripts. It's only meant to describe this template.
//
// YYY: Optional, but usually sensible to edit
// ###: as needed


// ==UserScript==
// @name           Redirect & Interstitial Bypass
// @namespace      https://github.com/paponius/
// @description    Immediately redirects when google prompts 'redirection notice'. Used to circumvent google pestering you when querying with I'm Feeling Lucky feature.
// @author         papo
// @version        0.4
// @license        CC BY-NC-SA 4.0
// ###icon           https://www.google.com/s2/favicons?sz=64&domain=yyy.yy

// @include      https://www.google.com/url?*
// match          *://*/*
// YYY match          *://*.yyy.com/yyy/yyy*/*

// ###run-at     document-start
//
// all possible: document-start -> document-end (default) -> document-idle
// tampermonkey has more, but if used in GreaseMonkey, script will silently fail. e.g. document-body

//// document-start ['loading'] -> document-body [<body> exist] -> document-end ['DOMContentLoaded'/'interactive'] -> document-idle (TM default)

// all possible: document-start ['loading'] -> document-body [<body> exist] (*GM N/A) -> document-end ['DOMContentLoaded'/'interactive'] (*GM default) -> document-idle (TM default), context-menu (runs only when clicked)
// *GM: GreaseMonkey does not support document-body, and Grease Monkey v4 has "Limited support", where "document-end is the only guaranteed".
//      GreaseMonkey will silently fail if other than supported three are used.

//// PERMISSIONS
// @grant          none
// ###grant          GM.getValue
// ###grant          GM.setValue
// ###grant          GM.xmlHttpRequest
// ###grant          GM.getResourceUrl
// ###grant          GM.deleteValue
// ###grant          GM.listValues
// ###grant          GM_getValue
// ###grant          GM_setValue
// ###grant          GM_xmlhttpRequest
// ###grant          GM_registerMenuCommand
//
// Add only required permissions. If any is added, "@grant none" must be removed.

// @require        https://github.com/paponius/Redirect & Interstitial Bypass/raw/master/GM/GM_common.js

//// FRAMEWORKS
// ###require      https://code.jquery.com/jquery-2.2.0.min.js
// ###require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js

//// PROJECT FILES
// #require        http://www.ponius.com/Redirect & Interstitial Bypass/src/Redirect & Interstitial Bypass.js?v0.9
// @require        https://github.com/paponius/Redirect & Interstitial Bypass/raw/master/src/Redirect & Interstitial Bypass.js?v0.9

// ###resource     sites.json http://www.ponius.com/iel/sites.json
// ###resource     res/imdb-enhanced-links.css http://www.ponius.com/iel/res/imdb-enhanced-links.css
// ###resource     extension_pages/options.html http://www.ponius.com/iel/extension_pages/options.html
//
// Name of a resource could be anything. To keep compatibility with WebExt, use relative path as a name for the resource as it appears in the project. e.g. res/sites.json

// #connect      *
// Used by GM_xmlhttpRequest. Define more specific values, for user's peace of mind.

// ###noframes
// UserScript will not run in iFrames

// ==/UserScript==
