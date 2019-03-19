var express = require('express');
var bodyParser = require('body-parser');

var {
  selectAll,
  grabOneJoke,
  grabTodaysJoke,
  grabFavorites,
  addNewFavorite,
  updateJokeOfDay,
  deleteFavorite,
  deleteTodaysJoke,
} = require('../mysql');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/jokes', (req, res) => {
  let items = req.query.id;
  selectAll(items)
    .then((jokes) => {
      res.status(200).send(jokes);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/jokeOfToday', (req, res) => {
  let item = req.query.id;
  grabOneJoke(item)
    .then((joke) => {
      res.status(200).send(joke);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/savedJoke', (req, res) => {
  grabTodaysJoke()
    .then((joke) => {
      res.status(200).send(joke);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/more-jokes', (req, res) => {
  let items = req.query.id;
  selectAll(items)
    .then((jokes) => {
      res.status(200).send(jokes);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/favorites', (req, res) => {
  grabFavorites()
    .then((favorites) => {
      res.status(200).send(favorites);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/new-favorite', (req, res) => {
  const id = req.query.id;
  addNewFavorite(id)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/remove-favorite', (req, res) => {
  let id = req.query.id;
  // console.log('id', id);
  deleteFavorite(id)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/new-jokeOfDay', (req, res) => {
  const joke = req.query;
  updateJokeOfDay(joke)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/delete-jokeOfDay', (req, res) => {
  deleteTodaysJoke()
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
