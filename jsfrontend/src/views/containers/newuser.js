import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import {makeObject} from '../functions/functions.js'

export default class NewUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      username: form.username.value,
                      password: form.password.value}
    console.log(formData)
    const object = makeObject("POST", formData)
    console.log(object)


  }
  render(){
    return(<div className="form-container">
      <DisplayTitle title="New User" />
      <LoginForm handleSubmit={this.handleSubmit}/>
    </div>)
  }
}
