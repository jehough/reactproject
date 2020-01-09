import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class LoginForm extends Component {

  render(){
    return(<div className="form">

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

    </div>)
  }
}
