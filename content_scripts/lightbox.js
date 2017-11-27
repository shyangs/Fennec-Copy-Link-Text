'use strict';
let lightbox = function(objOption){
	let domDiv = document.createElement('div');
	domDiv.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, .8);');
	domDiv.style.display = 'none';
	domDiv.addEventListener('click', function(){
		domDiv.style.display = 'none';
	});
	let domTable = document.createElement('table');
	let domTr = document.createElement('tr');
	let domTd = document.createElement('td');
	domTable.setAttribute('style', 'width:100%;height:100%;');
	domTd.setAttribute('style', 'vertical-align:middle; text-align:center;');

	domTd.appendChild(objOption.contentNode);
	domTr.appendChild(domTd);
	domTable.appendChild(domTr);
	domDiv.appendChild(domTable);
	document.body.appendChild(domDiv);
	if(objOption.opener){
		objOption.opener.addEventListener('click', function(){
			domDiv.style.display = 'inline';
		});
	}else{
		domDiv.style.display = 'inline';
	}

	return domDiv;
};
