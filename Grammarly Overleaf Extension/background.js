chrome.contextMenus.create({
    id: "grammify",
    title: "Grammify!",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "grammify") {
        chrome.tabs.sendMessage(tab.id,"your message"); 
    }
});


