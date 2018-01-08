const io = require('socket.io-client');
const socket = io();

const $background = $('#background');
const background = $background[0];

const $demo = $('#demo');
const demo = $demo[0];

function run() {
  $background.on('canplay', function(e) {
    background.loop = true;
    background.play();
  });

  $demo.on('ended', () => {
    background.play();
    $demo.hide();
  });

  socket.on('new_msg', function(data) {
    switch (data.msg) {
      case 'play':
        playDemo();
        break;
      case 'pause':
        pauseDemo();
        break;
      case 'stop':
        stopDemo();
        break;
    }
  });
}

function playDemo() {
  background.pause();
  $background.hide();

  $demo.show();
  demo.play();
}

function pauseDemo() {
  demo.pause();
}

function stopDemo() {
  $background.show();
  background.currentTime = 0;
  background.play();

  $demo.hide();
  demo.pause();
  demo.currentTime = 0;
}

$(window).on('load', function() {
  run();
});
