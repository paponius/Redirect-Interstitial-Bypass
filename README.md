# Universal Redirect & Interstitial Bypass

A lightweight Userscript designed to automatically bypass intermediate "Redirect Notice" landing pages, interstitial warnings, and external link confirmation steps across Google services and other web platforms.

---

## Features

* **Direct Navigation:** Extracts destination parameters directly from URI query strings and bypasses click-tracking notice pages immediately.
* **Safe Handling:** Checks for native security signatures (`iflsig`, `psig`) to avoid interfering when the host service already permits direct navigation.
* **Whitelist Support (`sites`):** Optionally restrict automated redirects to specific, explicitly trusted domain patterns.
* **Configurable Delay:** Accommodates slower session cookie initialization (e.g., Firefox localized state syncs) before location replacement.

---

## Installation

1. Install a userscript manager extension such as Tampermonkey or Violentmonkey.
2. Create a new userscript and paste the script code provided below.
3. Save and enable the script.

---

## Configuration

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `sites` | `Array<string>` | `[]` | List of targeted domain strings (e.g., `['imdb.com', 'forbes.com']`). Leave empty to run globally on all detected target URLs. |
| `delay` | `number` | `0` | Delay in milliseconds before executing `window.location.replace()`. Set to `1000`–`2000` if experiencing issues with unauthenticated session cookie races. |
