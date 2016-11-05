const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.route('/')
  .get((req, res) => {
    Movie.find({}, (err, movies) => {
      res.status(err ? 400 : 200).send(err || movies)
    })
  })
  .post((req, res) =>{
    Movie.create(req.body, (err, movie) =>{
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
    })
  })
//   .post((req, res) =>{
//     Movie.create(req.body, (err, movie) =>{
//       if (err) return res.status(400).send(err)
//       res.send(movie)
//   })
// })

module.exports = router;
