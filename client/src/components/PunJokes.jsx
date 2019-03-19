import React from 'react';
import PunJoke from './PunJoke.jsx';

class PunJokes extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showJokes: false };

    this.generateJokes = this.generateJokes.bind(this);
    this.showJokes = this.showJokes.bind(this);
  }

  generateJokes() {
    this.props.moreJokes('puns');
  }

  showJokes() {
    this.setState({
      showJokes: !this.state.showJokes,
    });
  }

  render() {
    let { jokes, handleNotFavorite, handleFavorite } = this.props;
    return (
      <div>
        <h3>Punny Jokes</h3>
        {this.state.showJokes && (
          <button onClick={this.generateJokes} className='read-btn'>
            more jokes
          </button>
        )}
        {'\n'}
        {this.state.showJokes === false && (
          <button onClick={this.showJokes} className='read-btn'>
            more punny jokes
          </button>
        )}
        {this.state.showJokes === false && (
          <PunJoke
            key={1}
            joke={jokes[0]}
            handleNotFavorite={handleNotFavorite}
            handleFavorite={handleFavorite}
          />
        )}
        {this.state.showJokes
          ? jokes.map((joke, idx) => (
              <PunJoke
                key={idx}
                joke={joke}
                handleNotFavorite={handleNotFavorite}
                handleFavorite={handleFavorite}
              />
            ))
          : null}
        {this.state.showJokes && (
          <button onClick={this.showJokes} className='hide-btn'>
            hide
          </button>
        )}
      </div>
    );
  }
}

export default PunJokes;
