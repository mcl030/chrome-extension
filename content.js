const createAlert = function() {
  const body = document.querySelector("body");
  const newAlert = document.createElement('div');
  newAlert.setAttribute("id", "newAlert");
  newAlert.setAttribute("style", "position:absolute;left:50%;top:50%;width:300px;height:200px;font-size:80px;");
  newAlert.innerText = "HELLO";

  body.appendChild(newAlert);

  setTimeout(function() {
    body.removeChild(newAlert)
  }, 3000)
}





chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "BLINK") {
      console.log("RECEIVED BLINK")
      createAlert();
      sendResponse({dom: document.querySelector("body")});
    }
  }
);

// const body = document.querySelector("body");

// const newAlert = document.createElement('div');

// newAlert.innerText = "HELLO";

// body.appendChild(newAlert);
// console.log("appended child")