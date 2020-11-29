chrome.browserAction.onClicked.addListener(sendFunc);
function sendFunc(tab){
    let msg = {txt:"execute"};
    chrome.tabs.sendMessage(tab.id,msg);
}
