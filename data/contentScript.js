'use strict';
/* Fennec Copy Link Text is licensed under GPLv3 or later versions. See the LICENSE file. */

let sLinkTag = 'A';

self.on('context', function(node){
	//node: in the page that the user context-clicked to invoke the menu.
	return !!closest(node, sLinkTag);
});

//handling menu item clicks
self.on('click', function(node){
	node = closest(node, sLinkTag);
	self.postMessage({
		"linktext"  : node.textContent
	});
});