import React from 'react';
import { Container, Table } from 'react-bootstrap';

class Users extends React.Component {

  render() {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Oleg</td>
              <td>Krieg</td>
              <td>KRiEG1234</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ira</td>
              <td>Milka</td>
              <td>princess1994</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Toha</td>
              <td>Kolos</td>
              <td>akpowar</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Oleg</td>
              <td>Bobir</td>
              <td>hardSuffer</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}


export default Users;