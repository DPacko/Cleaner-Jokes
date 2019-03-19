import React from 'react';
// REACT-BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FavoredJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: {} };

    this.removeFav = this.removeFav.bind(this);
  }

  componentDidMount() {
    this.setState({
      joke: this.props.joke,
    });
  }

  //this.props.handleNotFavorite(this.props.joke);
  removeFav() {
    this.props.handleNotFavorite(this.props.joke);
  }

  render() {
    let { joke } = this.props;
    return (
      <Row className='jokes joke-font'>
        <Col lg='8' className='fav-joke'>
          <div>{joke.setup}</div>
          <div>{joke.punchline}</div>
          <button onClick={this.removeFav} className='fav-btn'>
            remove
          </button>
        </Col>

        {/* <Col lg='4'>
      {(this.state.favorite && (
        <i className='fas fa-star' onClick={this.setFavorite} />
      )) || <i className='far fa-star' onClick={this.setFavorite} />}
    </Col> */}
      </Row>
    );
  }
}

export default FavoredJoke;
