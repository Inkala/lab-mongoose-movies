'use stricr';

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.render('movies/index', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const newMovie = await Movie.create({
      title,
      genre,
      plot
    });
    res.redirect('/movies');
    console.log(newMovie);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findOne({ _id: id });
    res.render('movies/show', { movie });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndRemove(id);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findOne({ _id: id });
    res.render('movies/edit', { movie });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  try {
    const { title, genre, plot } = req.body;
    const movie = await Movie.update({
      title,
      genre,
      plot
    });
    res.redirect('/movies');
    console.log('!!', movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
