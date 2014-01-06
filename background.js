var redir = "steal.js?ontraport,development";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		if (details && details.url.substr(-40) == "steal.production.js?ontraport,production"){
			return {
				// "redirectUrl": details.url.substring(0, details.url.length - 40) + redir,
				cancel: true
			};
		}
	},
	{
		"urls": [
			"*://staging.ontraport.com/*"
		],
		"types": ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
	},
	["blocking"]
);