import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom'

export default class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      newuser: false
    }
  }
  handleClick = () => {
    this.setState({newuser: true})
  }

  render(){
    return(<div className="form">
    {this.state.newuser? <Redirect to="/newuser"/>:null}
      <Form>
        <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text variant="danger">username password incorrect</Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button variant="info">Log In</Button>

      </Form>
              <Button variant="info" onClick={this.handleClick}>Create New User</Button>
    </div>)
  }
}
