/* jshint esversion: 8 */
/* jshint -W014: true */ // Misleading line break before '||' and '&&'.

(async function() {
	'use strict';

	var config = {
		// empty sites array means, this will force redirect for all sites
		sites: [
			// 'imdb.com'
		],
		delay: 2000 // in ms
	};

	// From: https://stackoverflow.com/a/8486188
	function parseURI() {
		const url = location.search;
		const query = url.substr(1);
		const result = {};
		query.split("&").forEach(function(part) {
			var item = part.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});
		return result;
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	var uriParams = parseURI();
	if (!uriParams.iflsig && !uriParams.psig && uriParams.q !== ''
		&& (config.sites.length === 0
			|| config.sites.some(site => uriParams.q.indexOf(site) !== -1)
			)
		) {
		await sleep(config.delay);
		location.href = uriParams.q;
	}
})();
