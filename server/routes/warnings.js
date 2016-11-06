const express = require('express');
const router = express.Router();

const Warning = require('../models/warning');

router.put('/addCount/:id', (req, res) => {
  Warning.findById( req.params.id, (err, warning) => {
    if (err) return res.status(400).send(err)
    warning.counter++;
    warning.save((err, warn) => {
      res.send(warn);
    })
  })
})
router.put('/minusCount/:id', (req, res) => {
  Warning.findById( req.params.id, (err, warning) => {
    if (err) return res.status(400).send(err)
    warning.counter--;
    warning.save((err, warn) => {
      res.send(warn);
    })
  })
})


module.exports = router;
