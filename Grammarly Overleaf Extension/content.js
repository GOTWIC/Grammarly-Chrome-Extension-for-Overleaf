chrome.runtime.onMessage.addListener(function (response, sendResponse) {
  grammify()
  return true
});

function cleanRawHTML(rawHTML){
  var str = rawHTML.replace(/<\/?[^>]+(>|$)/g, "");
  // A lot more cleaning required
  alert(str)
}

function getRawHTML(){
  var editor = document.getElementById('editor')
  var textbox = editor.childNodes[1].childNodes[0].childNodes[1].childNodes[1]
  var rawHTML = textbox.innerHTML
  return rawHTML
}


function grammify() {
  var rawHTML = getRawHTML()
  var cleanHTML = cleanRawHTML(rawHTML)
}





