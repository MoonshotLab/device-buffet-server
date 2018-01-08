const express = require('express');
const router = express.Router();

const io = require('./../app').io;

router.get('/:command', (req, res) => {
  try {
    console.log(req.params.command);

    io.emit('new_msg', {
      msg: req.params.command
    });

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
