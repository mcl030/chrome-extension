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
  

  const body = document.querySelector("body");
  const newAlert = document.createElement('div');
  newAlert.setAttribute("id", "newAlert");
  newAlert.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;left:50%;top:50%;margin-top:-125px;margin-left:-200px;width:400px;height:250px;font-size:80px;border:1px solid red;animation-duration:20s;animation-name:fadeIn;opacity:0;");

  const firstTip = document.createElement('div');
  firstTip.setAttribute("id", "tip1");
  firstTip.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:300px;height:50px;font-size:32px;border:1px solid red;");

  const secondTip = document.createElement('div');
  secondTip.setAttribute("id", "tip2");
  secondTip.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:300px;height:50px;font-size:32px;border:1px solid red;animation-duration:20s;animation-name:fadeIn;opacity:0;");
  

  const thirdTip = document.createElement('div');
  thirdTip.setAttribute("id", "tip3");
  thirdTip.setAttribute("style", "display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:300px;height:50px;font-size:32px;border:1px solid red;animation-duration:20s;animation-name:fadeIn;opacity:0;");
  

  newAlert.appendChild(firstTip);
  
  body.appendChild(newAlert);

  setTimeout(function() {
    newAlert.appendChild(secondTip)
  }, 3000)

  setTimeout(function() {
    newAlert.appendChild(thirdTip)
  }, 6000)


  setTimeout(function() {
    body.removeChild(newAlert)
  }, 20000)
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