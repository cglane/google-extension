


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "bower_components/jquery/dist/jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "app.js" });
  });
});
