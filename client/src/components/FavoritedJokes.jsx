import React from 'react';
import FavoredJoke from './FavoredJoke.jsx';

class FavoritedJokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { favoritedJokes, handleNotFavorite } = this.props;
    return (
      <div>
        {favoritedJokes.length !== 0 && (
          <h2 className='favorite-title title'>Favorites:</h2>
        )}

        {favoritedJokes.map((joke, index) => (
          <FavoredJoke
            handleNotFavorite={handleNotFavorite}
            joke={joke}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default FavoritedJokes;
