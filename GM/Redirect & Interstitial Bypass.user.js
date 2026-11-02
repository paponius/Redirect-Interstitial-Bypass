/*** ARCHITECTURE & DEVELOPER NOTES:
 * This Userscript file contains only the Metadata Block.
 * Core logic is maintained in external files for modularity, portability, and cleaner maintenance.
 *
 * Design Rationale:
 * - Modularity & Inspection: Splitting code by semantics makes long programs far easier
 *   to understand and inspect than a monolithic file of thousands of lines.
 * - Development: Enables full IDE support, live debugging, and clean semantic separation instead of a monolithic file.
 *   External JS files can be edited directly in an external IDE, making development significantly easier.
 * - Performance: External scripts included via `@require` are cached by the manager
 *   and update automatically when the script version changes.
 * - Portability: Separates GreaseMonkey environment wrappers from generic logic, allowing
 *   the same source files to be reused within WebExtensions.
 *
 * v3.0
 */

// ==UserScript==
// @name           Redirect & Interstitial Bypass
// @namespace      https://github.com/paponius/
// @description    Automatically bypasses intermediate redirect notice and warning pages with optional site filtering.
// @author         papo
// @version        0.5
// @license        CC BY-NC-SA 4.0
// ###icon           https://www.google.com/s2/favicons?sz=64&domain=yyy.yy

// @include        https://www.google.com/url?*

// @run-at         document-start
// @grant          none


//// FRAMEWORKS & UTILITIES
// DISABLED-require        https://github.com/paponius/Redirect-Interstitial-Bypass/raw/master/GM/GM_common.js

//// CORE APPLICATION LOGIC
// @require        https://raw.githubusercontent.com/paponius/Redirect-Interstitial-Bypass/master/src/Redirect-Interstitial-Bypass.js?v0.9

// ==/UserScript==
