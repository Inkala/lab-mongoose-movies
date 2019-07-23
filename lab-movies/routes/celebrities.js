'use stricr';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find({});
    res.render('celebrities/index', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = await Celebrity.create({
      name,
      occupation,
      catchPhrase
    });
    res.redirect('/celebrities');
    console.log(newCelebrity);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = await Celebrity.findOne({ _id: id });
    res.render('celebrities/show', { celebrity });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = await Celebrity.findOne({ _id: id });
    res.render('celebrities/edit', { celebrity });
  } catch (error) {
    next(error);
  }
});

router.post('/:id/edit', async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const celebrity = await Celebrity.update({
      name,
      occupation,
      catchPhrase
    });
    res.redirect('/celebrities');
    console.log('!!', celebrity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
