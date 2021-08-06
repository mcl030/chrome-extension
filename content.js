const createAlert = function() {
  let dynamicStyles = null;

  function addAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement('style');
      // dynamicStyles.type = 'text/css';
      document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }

  addAnimation(`
    @keyframes fadeIn { 
      from {
        opacity: 0;
      }

      10% {
        opacity: 1;
      }

      90% {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  `);
  
  let wink = chrome.runtime.getURL('images/winkArtichoke.png');

  const body = document.querySelector("body");
  const newAlert = document.createElement('div');
  newAlert.setAttribute("id", "newAlert");
  newAlert.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;left:50%;top:50%;margin-top:-125px;margin-left:-200px;width:400px;height:250px;font-size:80px;animation-duration:20s;animation-name:fadeIn;opacity:0;background-color:#F0EFEB;border-radius:8px;z-index:5;font-family:\"Segoe UI\";color:#CB997E;font-weight:500;border:2px solid #f1e6e0");
  // let image = require("images/winkArtichoke.png");

  const firstTip = document.createElement('div');
  firstTip.setAttribute("id", "tip1");
  firstTip.setAttribute("style", "display:flex;flex-direction:row;justify-content:start;align-items:center;width:330px;height:50px;font-size:15px;font-family:\"Segoe UI\";color:#CB997E;font-weight:500;");
  const firstTipImg = document.createElement('img');
  console.log(firstTipImg);
  firstTipImg.setAttribute("src", wink);
  firstTipImg.setAttribute("style", "margin-right: 10px;");
  const firstTipTxt = document.createElement('div');
  firstTipTxt.innerHTML = "Rest your eyes by looking in the distance!"
  firstTip.appendChild(firstTipImg);
  firstTip.appendChild(firstTipTxt);

  const secondTip = document.createElement('div');
  secondTip.setAttribute("id", "tip2");
  secondTip.setAttribute("style", "display:flex;flex-direction:row;justify-content:start;align-items:center;width:330px;height:50px;font-size:15px;animation-duration:20s;animation-name:fadeIn;opacity:0;animation-delay:4s;font-family:\"Segoe UI\";color:#CB997E;font-weight:500;");
  const secondTipImg = document.createElement('img');
  secondTipImg.setAttribute("src", wink);
  secondTipImg.setAttribute("style", "margin-right: 10px;");
  const secondTipTxt = document.createElement('div');
  secondTipTxt.innerHTML = "Stand up and stretch those bones!"
  secondTip.appendChild(secondTipImg);
  secondTip.appendChild(secondTipTxt);


  const thirdTip = document.createElement('div');
  thirdTip.setAttribute("id", "tip3");
  thirdTip.setAttribute("style", "display:flex;flex-direction:row;justify-content:start;align-items:center;width:330px;height:50px;font-size:15px;animation-duration:20s;animation-name:fadeIn;opacity:0;animation-delay:7s;font-family:\"Segoe UI\";color:#CB997E;font-weight:500;");
  const thirdTipImg = document.createElement('img');
  thirdTipImg.setAttribute("src", wink);
  thirdTipImg.setAttribute("style", "margin-right: 10px;");
  const thirdTipTxt = document.createElement('div');
  thirdTipTxt.innerHTML = "Stay hydrated and take a sip!"
  thirdTip.appendChild(thirdTipImg);
  thirdTip.appendChild(thirdTipTxt);


  const loadingBar = document.createElement('div');
  loadingBar.setAttribute("id", "loadingBar");
  loadingBar.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:center;width:350px;height:20px;font-size:14px;border:2px solid #e8d3c6;animation-duration:20s;animation-name:fadeIn;opacity:0;margin-top:18px;border-radius:12px;");
  const bar = document.createElement('div');
  bar.setAttribute("id", "bar");
  bar.setAttribute("style", "display:flex;flex-direction:column;justify-content:start;align-items:center;width:44px;height:18px;font-size:14px;animation-duration:20s;animation-name:fadeIn;opacity:0;border-radius:10px;background-color:#B7B7A4;");
  loadingBar.appendChild(bar);
  /** function move() { 
   *  if (i === 0) {
   *    i = 1;
   *  let elem = document.getElementId("bar");
   *  let id = setInterval(frame, 10);
   *    function frame() {
   *      if (width >= ??) {
   *        clearInterval(id);
   *        i = 0;
   *      } else {
   *        width++;
   *        elem.style.width = width + "%"}}}}} */
  const lengthenBar = setInterval(function () {
    bar.style.width = Number(bar.style.width.replace('px', '')) + 17 + 'px';
  }, 1000);

  setTimeout(function() {
    clearInterval(lengthenBar)
  }, 20000)


  newAlert.appendChild(firstTip);
  newAlert.appendChild(secondTip);
  newAlert.appendChild(thirdTip);
  newAlert.appendChild(loadingBar);
  body.appendChild(newAlert);

  

  setTimeout(function() {
    if (newAlert) {
      body.removeChild(newAlert)
    }
  }, 20000)

  window.addEventListener("click", function(event) {
    if (event.detail === 3) {
      if(newAlert) {
        body.removeChild(newAlert);
      }
    }
  })

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