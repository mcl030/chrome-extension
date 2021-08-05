// const alarmClock = require('./popup.js');
// import alarmClock from './popup.js'
// let a = document.getElementById('onButton');
// let b = document.getElementById('offButton');
// console.log('a: ', a);
// console.log('b: ', b);

// const alarmClock = {
//   onHandler : function(e) {
//       console.log("clickedON")
//       chrome.alarms.create("blinkTwiceAlarm", {delayInMinutes: 0.2, periodInMinutes: 1} );
//               window.close();
//   },

//   offHandler : function(e) {
//       chrome.alarms.clear("blinkTwiceAlarm");
//               window.close();
//   },

//   setup: function() {
//       let c = document.getElementById('onButton');
//       console.log('c: ', c)
//       c.addEventListener('click', alarmClock.onHandler );
//       let d = document.getElementById('offButton');
//       console.log('d: ', d)
//       d.addEventListener('click', alarmClock.offHandler );
//   }
// };

chrome.runtime.onInstalled.addListener(() => {
  console.log("installed!");
  // alarmClock.setup();
  // chrome.scripting.executeScript({
  //   file: 'popup.js'
  // })
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'buttonClicked') {
      console.log("clickedON")
      chrome.alarms.create("blinkTwiceAlarm", {delayInMinutes: 0.2, periodInMinutes: 1} );
      window.close();
      // sendResponse({farewell: "goodbye"});
    }
  }
);


chrome.alarms.onAlarm.addListener(function(tab) {
  alert("asdfasdf");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tab.id, {greeting: "BLINK"}, function(response) {
      console.log("BEEPBEEPBEEP")
      console.log(response.dom)
      // createBlinkTwice(response.dom);
    });
  });
});

//create pop up that displays three tasks given to complete with the given timer
//examples of background script --> chrome.tabs.scripting.executeScript()
// function createBlinkTwice(body) {
//   const popUp = document.createElement('div');









//   body.appendChild(popUp);
// }