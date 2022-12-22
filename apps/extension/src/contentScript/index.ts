export {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({
    url: document.URL,
    title: getTitle(),
    image: getImage(),
    description: getDescription(),
  });

  return true;
});

function getTitle() {
  return (
    document.querySelector('meta[property$="title"]')?.getAttribute('content') ||
    document.querySelector('meta[name$="title"]')?.getAttribute('content') ||
    document.querySelector('head > title')?.textContent ||
    ''
  );
}

function getDescription() {
  return document.querySelector('meta[property$="description"]')?.getAttribute('content') || document.querySelector('meta[name$="description"]')?.getAttribute('content') || '';
}

function getImage() {
  return document.querySelector('meta[property$="image"]')?.getAttribute('content') || '';
}
