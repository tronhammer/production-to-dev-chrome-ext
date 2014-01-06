var redir = "steal.production.js?ontraport,development";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		if (details.url.substr(-40) == "steal.production.js?ontraport,production"){
			return {
				"redirectUrl": details.url.substring(0, details.url.length - 40) + redir
			};
		}
	},
	{
		"urls": [
			"*://staging.ontraport.com/*",
		],
		"types": ["script"]
	},
	["blocking"]
);