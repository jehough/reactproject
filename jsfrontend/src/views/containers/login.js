import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import Button from 'react-bootstrap/Button'
import NewUser from './newuser'
import {Redirect} from 'react-router-dom'
import {makeObject} from '../functions/functions.js'
import {handleUserResponse} from '../../ducks/user/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Login extends Component {
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
    fetch("http://localhost:4000/authenticate", object)
      .then(resp => resp.json())
      .then(json => this.props.handleUserResponse(json))
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


const mapStateToProps = state => {
  return {
    signed_in: state.signed_in,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({handleUserResponse}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
