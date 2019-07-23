'use strict';

const mongoose = require('mongoose');

const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/moviesdb', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const celebrities = [
  { name: 'Johnny Depp',
    occupation: 'actor',
    catchPhrase: 'Pirates'
  },
  { name: 'Floor Jansen',
    occupation: 'singer',
    catchPhrase: 'Energize me'
  },
  { name: 'Usain Bolt',
    occupation: 'runner',
    catchPhrase: 'top'
  }
];

const insertSeed = async () => {
  try {
    await Celebrity.insertMany(celebrities);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

insertSeed();
