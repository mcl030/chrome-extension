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

chrome.runtime.onStartup.addListener(() => {
  console.log("installed!");
  chrome.alarms.get("blinkTwiceAlarm", function(alarm) {
    if (alarm) {
      chrome.alarms.clear("blinkTwiceAlarm", function() {
        chrome.alarms.getAll();
      }
    )}
    chrome.alarms.create("blinkTwiceAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.4} );
  })
});

chrome.alarms.onAlarm.addListener(function(tab) {
  console.log("beep boop");

  // chrome.windows.create({
  //   "focused" : true,
  //   "height" : 300, 
  //   "width" : 500,
  //   "left": 960,
  //   "top" : 540,
  //   "url" : "alert.html"
  // })
  // const tabId = getTabId();
  // chrome.scripting.executeScript(
  //   {
  //     target : {tabId : tabId}, 
  //     files : ['content.js']
  //   }, 
  //   () => {})
  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    console.log("tab", tab)
    console.log("tab[0]", tab[0])
    console.log("tab[0].id", tab[0].id)
    chrome.tabs.sendMessage(tab[0].id, {greeting: "BLINK"}, function(response) {
      console.log("BEEPBEEPBEEP")
      console.log("currentTab DOM:", response.dom)
      // chrome.scripting.executeScript({
      //   target : {tabId : tab[0].id}, 
      //   files : ['content.js']
      // })
    });
  })
  // chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
  //   console.log("tab", tab)
  //   console.log("tab[0]", tab[0])
  //   console.log("tab[0].id", tab[0].id)
  //   chrome.scripting.executeScript({
  //     target : {tabId : tab[0].id}, 
  //     files : ['content.js']
  //   })
  // })
});



// chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //     if (request.message === 'buttonClicked') {
  //       console.log("clickedON")
  //       chrome.alarms.create("blinkTwiceAlarm", {delayInMinutes: 0.2, periodInMinutes: 1} );
  //       window.close();
  //       // sendResponse({farewell: "goodbye"});
  //     }
  //   }
  // );

//create pop up that displays three tasks given to complete with the given timer
//examples of background script --> chrome.tabs.scripting.executeScript()
// function createBlinkTwice(body) {
//   const popUp = document.createElement('div');