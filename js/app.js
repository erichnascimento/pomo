"use strict";

function initialize() {
  var settings = {
    durations: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15
    },
    longBreakEach: 4
  };

  var app = document.getElementById('pomoApp');
  //app.setAttribute('settings', settings);
  //app.start();
  //setInterval(function(){app.next()}, 3000);
}

window.addEventListener('DOMContentLoaded', function() {
  initialize();
});
