import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import {makeObject, handleUserResponse} from '../functions/functions.js'

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

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      email: form.email.value,
                      password: form.password.value}
    const object = makeObject("POST", formData)
    fetch("http://localhost:4000/authenticate")
      .then(resp => resp.json())
      .then(json => handleUserResponse(json))
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
