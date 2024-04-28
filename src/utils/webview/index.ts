const getWebviewUrl = `
try {
	const shortcutIcon = window.document.querySelector('head > link[rel="shortcut icon"]');
	const icon = shortcutIcon || Array.from(window.document.querySelectorAll('head > link[rel="icon"]')).find((icon) => Boolean(icon.href));
	
	const siteName = document.querySelector('head > meta[property="og:site_name"]');
	const title = siteName || document.querySelector('head > meta[name="title"]');
	window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(
		{
			type: 'GET_WEBVIEW_URL',
			payload: {
				title: title ? title.content : document.title,
				url: location.href,
				icon: icon && icon.href
			}
		}
	))
} catch (error) {
	console.error("error",error)
}
`;

export const JS_LISTENER_OPEN_LINK_TARGER = `
document.addEventListener("click", function(e) {
        if (e.target.tagName == "A" && e.target.hasAttribute("target"))
        {			
			 window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(
			{
				type: 'TARGET',
				payload: {
					url: e.target.href,
				}
			}
		));
        }   
        });
`;

export const JS_WEBVIEW_URL = `
	(function () {
		${getWebviewUrl}
		${JS_LISTENER_OPEN_LINK_TARGER}
	})();
`;
