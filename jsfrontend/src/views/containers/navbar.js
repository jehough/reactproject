import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './search_bar'
export default class Navigation extends Component {

  render(){
    return(<Navbar variant="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Little Ocean Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
  )
  }
}
