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
  document.title = 'POMO ' + app.version;


  var attrValue = null;

  if (attrValue = getArg('pm', null)) {
    app.pomodoroDuration =  attrValue;
  }

  if (attrValue = getArg('sb', null)) {
    app.shortBreakDuration = attrValue;
  }

  if (attrValue = getArg('lb', null)) {
    app.longBreakDuration = attrValue;
  }

  if (attrValue = getArg('lbi', null)) {
    app.longBreakInterval = attrValue;
  }

  if (attrValue = getArg('cp', null)) {
    app.completedPomodoros = attrValue;
  }

  app.init();
}

window.addEventListener('DOMContentLoaded', function() {
  initialize();
});
