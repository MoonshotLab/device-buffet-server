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
    $demo.hide();

    background.currentTime = 0;
    background.play();
    $background.show();
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
  console.log('playing demo');
  $background.hide();
  background.pause();

  demo.play();
  $demo.show();
}

function pauseDemo() {
  console.log('pausing demo');
  demo.pause();
}

function stopDemo() {
  console.log('stopping demo');
  $demo.hide();
  demo.pause();
  demo.currentTime = 0;

  background.currentTime = 0;
  background.play();
  $background.show();
}

$(window).on('load', function() {
  run();
});
