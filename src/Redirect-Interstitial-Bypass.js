/* jshint esversion: 8 */

(function() {
	'use strict';

	// Special URL viewer: Change 'example.com/debug-logs' in @match above to your preferred URL
	if (window.location.href.includes('debug-logs')) {
		const savedLog = GM_getValue('last_redirect_debug', { message: 'No logs found.' });
		console.log('[Redirect Debugger] Retrieved Log:', savedLog);

		window.addEventListener('DOMContentLoaded', () => {
			document.body.innerHTML = `
				<div style="font-family: monospace; padding: 20px; background: #1e1e1e; color: #d4d4d4; height: 100vh;">
					<h2>Google Redirect Debug Log</h2>
					<pre>${JSON.stringify(savedLog, null, 2)}</pre>
				</div>`;
		});
		return;
	}

	console.log('[Redirect Script] Initialized on URL:', window.location.href);

	var config = {
		// Empty sites array forces redirect for all sites; add domains to restrict (e.g., ['forbes.com'])
		sites: [
			// 'imdb.com'
		],
		delay: 2000 // delay in ms before redirecting, needed for browser to include cookies with the target site.
	};

	console.log('[Redirect Script] Config loaded:', config);
	console.log('[Redirect Script] Current hostname:', location.hostname, '| Pathname:', location.pathname);

	if (location.hostname.includes('google.com') && location.pathname.startsWith('/url')) {
		console.log('[Redirect Script] Match verified: Google redirect interstitial detected.');

		const uriParams = new URLSearchParams(location.search);
		const targetUrl = uriParams.get('url') || uriParams.get('q');
		const iflsig = uriParams.get('iflsig');
		const psig = uriParams.get('psig');

		console.log('[Redirect Script] Extracted URL parameters:', { targetUrl, iflsig, psig });

		const matchesSite = config.sites.length === 0 || config.sites.some(site => targetUrl && targetUrl.includes(site));
		console.log('[Redirect Script] Target URL matches allowed sites restriction:', matchesSite);

		const conditionsMet = !iflsig && !psig && targetUrl && matchesSite;
		console.log('[Redirect Script] Evaluation of all redirect conditions:', {
			noIflsig: !iflsig,
			noPsig: !psig,
			hasTargetUrl: Boolean(targetUrl),
			matchesSite: matchesSite,
			overallResult: conditionsMet
		});

		if (conditionsMet) {
			console.log(`[Redirect Script] Conditions met. Scheduling redirect timeout for ${config.delay}ms to:`, targetUrl);
			setTimeout(() => {
				console.log('[Redirect Script] Executing window.location.replace() now for:', targetUrl);
				const debugData = {
					timestamp: new Date().toISOString(),
					sourceUrl: window.location.href,
					targetUrl: targetUrl,
					iflsig: iflsig,
					psig: psig
				};

				GM_setValue('last_redirect_debug', debugData);
				console.log('[Redirect Script] Saved to userscript storage. Executing redirect...');


				window.location.replace(targetUrl);

				// This line will execute synchronously, but will likely be wiped out instantly by the page unload
				console.log('[Redirect Script] Log immediately after window.location.replace() (likely invisible).');
			}, config.delay);
		} else {
			console.log('[Redirect Script] Conditions failed. Redirect aborted.');
		}
	} else {
		console.log('[Redirect Script] Current page is not a Google redirect endpoint.');
	}

})();
