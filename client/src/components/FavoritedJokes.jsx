import React from 'react';
import FavoredJoke from './FavoredJoke.jsx';

const FavoritedJokes = ({ favoritedJokes }) => (
  <div>
    <h2 className='favorite-jokes'>Favorites:</h2>
    {favoritedJokes.map((joke, index) => {
      return <FavoredJoke joke={joke} key={index} />;
    })}
  </div>
);

export default FavoritedJokes;
