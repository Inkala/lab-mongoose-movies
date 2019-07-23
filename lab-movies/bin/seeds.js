'use strict';

const mongoose = require('mongoose');

// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/moviesdb', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// const celebrities = [
//   { name: 'Johnny Depp',
//     occupation: 'actor',
//     catchPhrase: 'Pirates'
//   },
//   { name: 'Floor Jansen',
//     occupation: 'singer',
//     catchPhrase: 'Energize me'
//   },
//   { name: 'Usain Bolt',
//     occupation: 'runner',
//     catchPhrase: 'top'
//   }
// ];

const movies = [
  { title: 'Liong King',
    genre: 'drama',
    plot: 'Africa'
  },
  { title: 'Persuit of Hapiness',
    genre: 'drama',
    plot: 'US'
  }
];

const insertSeed = async () => {
  try {
    await Movie.insertMany(movies);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

insertSeed();
