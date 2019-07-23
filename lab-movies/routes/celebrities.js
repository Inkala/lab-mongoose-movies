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

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const celebrity = await Celebrity.findOne({ _id: id });
    res.render('celebrities/show', { celebrity });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
