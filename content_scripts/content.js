'use strict';
let closest = function(node, nodeName){
  while(true){
      if( node === null ) return false;
      if( node.nodeName.toUpperCase() === nodeName ) return node;
      node = node.parentNode;
  }
};

let domMenu = document.createElement('menu');
let domMenuitem = document.createElement('menuitem');
domMenu.setAttribute('type', 'context');
domMenu.setAttribute('id', 'fcltHTML5Menu');
domMenuitem.setAttribute('command', 'context');
domMenuitem.setAttribute('label', 'Copy Link Text');

let domTextarea = null;
domMenuitem.addEventListener('click', function(){
    document.body.appendChild(domTextarea);
    domTextarea.select();
    document.execCommand('copy');
    domTextarea.remove();
});

domMenu.appendChild(domMenuitem);
document.body.appendChild(domMenu);

domMenuitem = null;
domMenu = null;

document.addEventListener('contextmenu', function(event){
  let sLinkTag = 'A';
  let node = closest(event.target, sLinkTag);
  if(node){
    node.setAttribute("contextmenu", "fcltHTML5Menu");
    domTextarea = document.createElement('textarea');
    domTextarea.textContent = node.textContent;
  }

  sLinkTag = null;
  node = null;
});
