const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');
const Warning = require('../models/warning')

router.route('/')
  .get((req, res) => {
    Movie.find({}, (err, movies) => {
      res.status(err ? 400 : 200).send(err || movies)
    }).populate('warnings')
  })
  .post((req, res) =>{
    Movie.create(req.body, (err, movie) => {
      if (err) return res.status(400).send(err)
      res.send(movie)
  })
})

router.route('/:title')
  .put((req, res) => {
    Movie.find({ title: req.params.title }, (err, movie) => {
      if (err) return res.status(400).send(err)
      if (!movie.length) {
      Movie.create(req.body, (err, movie) => {
        if (err) return res.status(400).send(err)
        res.send(movie)
      })
      } else {
        res.send(movie)
      }
    }).populate('warnings')
  })

router.route('/addWarning/:id')
  .put((req, res) => {
    Warning.create(req.body, (err, warning) => {
      if (err) return res.status(400).send(err);
      Movie.findById(req.params.id, (err, movie) =>{
        if (err) return res.status(400).send(err)
        movie.warnings.push(warning._id);
        movie.save(err => {
          res.send()
      })
    })
  })
})

module.exports = router;
