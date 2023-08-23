import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navigation.scss';


class Navigation extends Component { 
    render()  {
        const { currentPage, onPageChange, invertColor } = this.props;
        const invert = invertColor ? 'invert(1)' : 'invert(0)';

        return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ filter: invert }}>
                        <Nav.Link active={currentPage === 'home'} onClick={() => onPageChange('home')} href="#home">Coffee house</Nav.Link>
                        <Nav.Link active={currentPage === 'our'} onClick={() => onPageChange('our')} href="#our">Our coffee</Nav.Link>
                        <Nav.Link active={currentPage === 'foryou'} onClick={() => onPageChange('foryou')} href="#foryou">For your pleasure</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}

export default Navigation;