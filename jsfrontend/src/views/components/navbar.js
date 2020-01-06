import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default class Navigation extends Component {

  render(){
    return(<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home">Little Ocean Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#category1">Fish</NavDropdown.Item>
              <NavDropdown.Item href="#category2">Equipment</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
  )
  }
}