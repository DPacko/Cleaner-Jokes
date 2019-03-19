import React from 'react';

class JokeOfDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.grabRandom = this.grabRandom.bind(this);
  }

  grabRandom() {
    this.props.grabAJoke();
  }

  render() {
    let { jokeOfDay } = this.props;
    return (
      <div className='jokeofday'>
        <div className='wiggle'>
          <h2 className='joke-today' onClick={this.grabRandom}>
            Joke of the Day!
          </h2>
        </div>
        <div>{jokeOfDay.setup}</div>
        <div>{jokeOfDay.punchline}</div>
      </div>
    );
  }
}

export default JokeOfDay;
