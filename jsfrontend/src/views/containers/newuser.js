import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'

export default class NewUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    console.log(form.username.value)
    console.log(form.password.value)
  }
  render(){
    return(<div className="form-container">
      <DisplayTitle title="New User" />
      <LoginForm handleSubmit={this.handleSubmit}/>
    </div>)
  }
}
