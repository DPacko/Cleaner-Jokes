import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// REACT-BOOTSTRAP
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// COMPONENTS
import JokeOfDay from './components/JokeOfDay.jsx';
import FavoritedJokes from './components/FavoritedJokes.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeOfDay: "There's no place like 127.0.0.1",
      favoritedJokes: ['What do you call a fake noodle? An Impasta.'],
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    let { jokeOfDay, favoritedJokes } = this.state;
    return (
      <div>
        {/* <Container> */}
        <h1>JOKES inspired from HRR Presentations!</h1>
        {/* <Row>
          <Col xs s md lg xl='6' className='left-side'> */}
        <JokeOfDay jokeOfDay={jokeOfDay} />
        <FavoritedJokes favoritedJokes={favoritedJokes} />
        {/* </Col>
        </Row> */}
        {/* </Container> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
