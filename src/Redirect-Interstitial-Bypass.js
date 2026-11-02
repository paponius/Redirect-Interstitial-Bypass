/* jshint esversion: 8 */

(function() {
	'use strict';

	var config = {
		// Empty sites array forces redirect for all sites; add domains to restrict (e.g., ['forbes.com'])
		sites: [
			// 'imdb.com'
		],
		delay: 2000 // delay in ms before redirecting, needed for browser to include cookies with the target site.
	};

	if (location.hostname.includes('google.com') && location.pathname.startsWith('/url')) {
		const uriParams = new URLSearchParams(location.search);
		const targetUrl = uriParams.get('url') || uriParams.get('q');
		const iflsig = uriParams.get('iflsig');
		const psig = uriParams.get('psig');

		const matchesSite = config.sites.length === 0 || config.sites.some(site => targetUrl && targetUrl.includes(site));

		if (!iflsig && !psig && targetUrl && matchesSite) {
			setTimeout(() => {
				window.location.replace(targetUrl);
			}, config.delay);
		}
	}

})();
