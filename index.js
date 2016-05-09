'use strict';
/* Fennec Copy Link Text is licensed under GPLv3 or later versions. See the LICENSE file. */

let sCLT = 'Copy Link Text';
let sLinkTag = 'A';
let utils = require('sdk/window/utils');
let activeBrowserWindow = utils.getMostRecentBrowserWindow();
let self = require('sdk/self');

if(activeBrowserWindow.NativeWindow){
	//Firefox for Android
	let nw = activeBrowserWindow.NativeWindow;
	let cb = require('./data/clipboard');
	let closest = require('./data/closest').closest;

	let label = sCLT;
	let selector = {
		matches: function(element){
			return !!closest(element, sLinkTag);
		}
	};
	let callback = function(element){
		element = closest(element, sLinkTag);
		cb.copyText(activeBrowserWindow, element.textContent);
	};

	let menuID = nw.contextmenus.add(label, selector, callback);

}else{
	//Firefox for Desktop
	require('sdk/context-menu').Item({
		label: sCLT,
		contentScriptFile: [
			self.data.url('closest.js'),
			self.data.url('contentScript.js')
		],
		onMessage: function (linkData){
			require('sdk/clipboard').set(linkData.linktext);
		}
	});
}