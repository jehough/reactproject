import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import {makeObject, handleUserResponse} from '../functions/functions.js'

export default class NewUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      email: form.email.value,
                      password: form.password.value}
    const object = makeObject("POST", formData)
    fetch("http://localhost:4000/user", object)
      .then(resp => resp.json())
      .then(json => handleUserResponse(json))
  }
  render(){
    return(<div className="form-container">
      <DisplayTitle title="New User" />
      <LoginForm handleSubmit={this.handleSubmit}/>
    </div>)
  }
}
