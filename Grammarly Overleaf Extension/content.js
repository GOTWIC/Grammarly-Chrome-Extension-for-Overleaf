//import * as Grammarly from "@grammarly/editor-sdk";
//await Grammarly.init("client_HTtf1BP4pP1a81RGthqbjE");



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

function sendToGrammarly(str){
  var elem = document.createElement("textarea");
  elem.id = "grammarly_text_area"
  elem.innerHTML = str
  elem.rows = "30"
  elem.cols = "60"
  //document.body.appendChild(elem);  

  var gscript = document.createElement("script")
  gscript.type = "module"
  gscript.src = "https://unpkg.com/@grammarly/editor-sdk?clientId=client_HTtf1BP4pP1a81RGthqbjE"
  var gwrapper = document.createElement("grammarly-editor-plugin");
  gwrapper.appendChild(elem)
  
  document.body.appendChild(gscript)
  document.body.appendChild(gwrapper)
}

function grammify() {
  //var rawHTML = getRawHTML()
  //var cleanHTML = cleanRawHTML(rawHTML)
  cleanHTML = "Mispellings and grammatical errors can effect your credibility. The same goes for misused commas, and other types of punctuation . Not only will Grammarly underline these issues in red, it will also showed you how to correctly write the sentence." 
  sendToGrammarly(cleanHTML)
}







