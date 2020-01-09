import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './search_bar'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

 class Navigation extends Component {

  render(){
    return(<Navbar variant="light" expand="lg" sticky="top">
          <Navbar.Brand><Link to="/">Little Ocean Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/">Home</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/categories">Categories</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav> &#128722; <Link to="/cart">Cart({this.props.items.length})</Link>: ${this.props.price}</Nav>
          <SearchBar />
          </Navbar.Collapse>
        </Navbar>
  )
  }
}
const mapStateToProps = state => {
  return {
  items: state.items,
  price: state.price
}}
export default withRouter(connect(mapStateToProps)(Navigation))
