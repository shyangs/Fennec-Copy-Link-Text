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
    let bln = document.execCommand('copy');
    if(bln){
      domTextarea.remove();
    }else{
      let scrollX = window.screenX;
      let scrollY = window.scrollY;

      // https://bugzilla.mozilla.org/show_bug.cgi?id=1420466
      let newtext = document.createTextNode('Copying text command was successful. Click to continue.');
      let domDiv = document.createElement('div');
      domDiv.style.backgroundColor = 'white';
      domDiv.style.width = '80%';
      domDiv.style.margin = '0 auto';
      domDiv.style.padding = 10;
      domDiv.appendChild(newtext);
      let myLightbox = lightbox({
        contentNode: domDiv
      });
      myLightbox.addEventListener('click', function(){
        domTextarea.select();
        document.execCommand('copy');
        domTextarea.remove();
        myLightbox.remove();
        window.scroll(scrollX, scrollY);
      });
    }
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
