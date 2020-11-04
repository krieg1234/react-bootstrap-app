import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Components/Jumbotron'

class About extends React.Component {

  render() {
    return (
      <Container>
        <h3>About page</h3>
        <Jumbotron />
      </Container>
    );
  }
}


export default About;