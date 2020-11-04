import React from 'react';
import { Button, Navbar, Nav, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &:hover {
            color: white;
        }
    }
`

class Navibar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    handleShow = () => {
        this.setState({ show: true });
    }


    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        const { show } = this.state;
        return (
            <>

                <Styles>
                    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Brand>KRiEG1234 project</Navbar.Brand>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className='mr-auto'>
                                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                    <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                                    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                                </Nav>
                                <Nav>
                                    <Button variant='primary' className='mr-2' onClick={this.handleShow}>Log In</Button>
                                    <Button variant='primary'>Log Out</Button>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Styles>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label>Email adress</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' />
                            </Form.Group>
                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type='checkbox' label='Запомнить' />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Navibar;