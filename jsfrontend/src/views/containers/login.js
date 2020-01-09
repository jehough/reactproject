import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'

export default class Login extends Component {

  render(){
    return(<div>
      <DisplayTitle title="Login Page" />
      <h4>You must login to view your cart.</h4>
      <LoginForm />
    </div>)
  }
}
