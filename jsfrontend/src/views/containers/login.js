import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      newuser: false
    }
  }

  handleClick = () => {
    this.setState({newuser: true})
  }

  handleSubmit = () => {
    console.log("Login Submit")
  }
  render(){
    return(<div className="form-container">
      {this.state.newuser? <Redirect to="/newuser"/>:null}
      <DisplayTitle title="Login Page" />
      <h4>You must login to view your cart.</h4>
      <LoginForm handleSubmit={this.handleSubmit}/>
      <Button variant="info" onClick={this.handleClick}>Create New User</Button>
    </div>)
  }
}
