export {};

console.log(document.querySelector('meta[property$="title"]')?.getAttribute('content'));
console.log(document.querySelector('meta[name$="description"]')?.getAttribute('content'));
console.log(document.URL);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');

  sendResponse('Im content');
  return true;
});

function findTitle() {}

function findDescription() {}
