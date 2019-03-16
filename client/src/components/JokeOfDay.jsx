import React from 'react';

const JokeOfDay = ({ jokeOfDay }) => (
  <div>
    <h2 className='joke-today'> Joke of the Day! </h2>
    <h3>{jokeOfDay}</h3>
  </div>
);

export default JokeOfDay;
