import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown';
export default class Navigation extends Component {

  render(){
    return(<Navbar variant="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Little Ocean Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fish">Fish</NavDropdown.Item>
              <NavDropdown.Item href="/equipment">Equipment</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search Our Products" className="searchBox"/>
              <Button variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
  )
  }
}
