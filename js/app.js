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
  app.setAttribute('pomodoro-duration',
    getArg('pm', app.getAttribute('pomodoro-duration')));

  app.setAttribute('short-break-duration',
    getArg('sb', app.getAttribute('short-break-duration')));
  app.setAttribute('long-break-duration', getArg('lb',
    app.getAttribute('long-break-duration')));
  app.setAttribute('long-break-interval', getArg('lbi',
    app.getAttribute('long-break-interval')));

  app.init();
  //app.start();
  //setInterval(function(){app.next()}, 3000);
}

window.addEventListener('DOMContentLoaded', function() {
  initialize();
});
