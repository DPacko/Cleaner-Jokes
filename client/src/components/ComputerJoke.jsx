import React from 'react';
// REACT-BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ComputerJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setFavorite = this.setFavorite.bind(this);
  }

  setFavorite() {
    let { favorited } = this.props.joke;
    let outcome;
    if (favorited === 'false') {
      outcome = 'true';
    } else {
      outcome = 'false';
    }

    if (outcome === 'true') {
      this.props.handleFavorite(this.props.joke);
    } else {
      this.props.handleNotFavorite(this.props.joke);
    }
  }

  render() {
    let isFavorited = this.props.joke.favorited !== 'false';
    return (
      <Row className='jokes joke-font'>
        <Col lg='9'>
          <div>{this.props.joke.setup}</div>
          <div className='underline-joke'>{this.props.joke.punchline}</div>
        </Col>

        <Col lg='3'>
          {(isFavorited && (
            <i className='fas fa-star' onClick={this.setFavorite} />
          )) || <i className='far fa-star' onClick={this.setFavorite} />}
        </Col>
      </Row>
    );
  }
}

export default ComputerJoke;
