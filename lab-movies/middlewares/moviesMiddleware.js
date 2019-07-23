'use strict';

const isCelebFormFilled = (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  if (!name || !occupation || !catchPhrase) {
    return res.redirect(req.path);
  }
  next();
};

const isMovieFormFilled = (req, res, next) => {
  const { title, genre, plot } = req.body;
  if (!title || !genre || !plot) {
    return res.redirect(req.path);
  }
  next();
};

module.exports = {
  isCelebFormFilled,
  isMovieFormFilled
};
