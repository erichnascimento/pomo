"use strict";

/**
 * Extract args from query string URL
 */
function getArg(argname, defaultValue) {
  var regex = new RegExp('\\?.*?' + argname + '=([^&]*)&?');
  var parts = location.search.match(regex);
  if (!parts) {
    return defaultValue;
  }

  return (parts.length == 2)
    ? parts[1]
    : true
}

function initialize() {
  var app = document.getElementById('pomoApp');
  var attrValue = null;

  if (attrValue = getArg('pm', null)) {
    app.setAttribute('pomodoro-duration', attrValue);
  }

  if (attrValue = getArg('sb', null)) {
    app.setAttribute('short-break-duration', attrValue);
  }

  if (attrValue = getArg('lb', null)) {
    app.setAttribute('long-break-duration', attrValue);
  }

  if (attrValue = getArg('lbi', null)) {
    app.setAttribute('long-break-interval', attrValue);
  }
  
  console.log(app.getAttribute('long-break-interval'));

  app.init();
  //app.start();
  //setInterval(function(){app.next()}, 3000);
}

window.addEventListener('DOMContentLoaded', function() {
  initialize();
});
