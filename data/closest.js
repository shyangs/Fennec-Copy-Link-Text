'use strict';
/* Fennec Copy Link Text is licensed under GPLv3 or later versions. See the LICENSE file. */

(function(){
let closest = function(node, nodeName){
		while(true){
			if( node === null ) return false;
			if( node.nodeName.toUpperCase() === nodeName ) return node;
			node = node.parentNode;
		}
	};

	if(typeof exports !== 'undefined'){
		exports.closest = closest;
	}else{
		let FN = Function, global = this || FN('return this')();
		global.closest = closest;
	}
})();