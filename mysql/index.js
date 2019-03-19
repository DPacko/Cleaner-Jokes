const config = require('../knexfile');

const env = 'development';
const knex = require('knex')(config[env]);

const selectAll = (items) => {
  items = Number(items);
  let min = items;
  let max = items + 10;
  return knex('Jokes')
    .whereBetween('id', [min, max])
    .then((records) => {
      return records;
    });
};

const grabOneJoke = (id) => {
  return knex('Jokes')
    .where('id', id)
    .then((record) => {
      return record;
    });
};

const grabTodaysJoke = () => {
  return knex
    .select()
    .from('JokeOfToday')
    .then((record) => {
      return record[0];
    });
};

const grabFavorites = () => {
  return knex('Jokes')
    .where('favorited', 'true')
    .then((jokes) => {
      return jokes;
    });
};

const addNewFavorite = (id) => {
  return knex('Jokes')
    .where('id', id)
    .update({
      favorited: 'true',
    })
    .then(() => {
      return;
    });
};

const deleteFavorite = (notFave) => {
  return knex('Jokes')
    .where('id', notFave)
    .update({
      favorited: 'false',
    })
    .then(() => {
      return;
    });
};

const deleteTodaysJoke = () => {
  return knex('JokeOfToday')
    .where('id', 1)
    .del()
    .then(() => {
      return;
    });
};

module.exports = knex;

module.exports = {
  selectAll,
  grabOneJoke,
  grabTodaysJoke,
  grabFavorites,
  addNewFavorite,
  deleteFavorite,
  deleteTodaysJoke,
};
