function handleContextMenu(event) {
  var selection = window.document.getSelection();
  if(selection != "undefined") {
    safari.self.tab.setContextMenuEventUserInfo(event, selection.toString());
  } 
  else {
    event.preventDefault();
  }
}

document.addEventListener("contextmenu", handleContextMenu, false);