
const onButton = document.getElementById('onButton');
console.log(onButton);
onButton.addEventListener('click', chrome.runtime.sendMessage({message: 'buttonClicked'}, (response) => {}));




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "BLINK") {
      sendResponse({dom: document.getElementsByTagName("body")[0]});
    }
  }
);