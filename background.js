chrome.browserAction.onClicked.addListener(function(tab) {
  var codes = ''+
  'var v = document.querySelector("#movie_player > div.html5-video-container > video");'+
    'if(v !== undefined) {'+
      'if (v.hasAttribute("loop")) {'+
        'console.log("repeat off");'+
        'v.removeAttribute("loop");'+
      '} else {'+
        'console.log("repeat on");'+
        'v.setAttribute("loop", "true");'+
      '}'+
    '};'
  chrome.tabs.executeScript({
    code: codes
  });
});