var xhr = new XMLHttpRequest();
xhr.open("GET", "/Custom.css", false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
