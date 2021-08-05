// // let c = document.getElementById('onButton');
// // console.log('c: ', c)
// // let d = document.getElementById('offButton');
// // console.log('d: ', d)

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
// const onButton = document.getElementById('onButton');
// console.log(onButton);
// onButton.addEventListener('click', chrome.runtime.sendMessage({message: 'buttonClicked'}, (response) => {}));




// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.greeting === "BLINK") {
//       sendResponse({dom: document.getElementsByTagName("body")[0]});
//     }
//   }
// );


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.greeting === "STARTUP") {
//       // sendResponse({dom: document.getElementsByTagName("body")[0]});
//       alarmClock.setup();
//     }
//   }
// );