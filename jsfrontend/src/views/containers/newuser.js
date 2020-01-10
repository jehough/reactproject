import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import LoginForm from '../components/login_form'
import {makeObject} from '../functions/functions.js'
import {handleUserResponse} from '../../ducks/user/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class NewUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = {
                      email: form.email.value,
                      password: form.password.value}
    const object = makeObject("POST", formData)
    fetch("http://localhost:4000/user", object)
      .then(resp => resp.json())
      .then(json => this.props.handleUserResponse(json))
  }
  render(){
    return(<div className="form-container">
      <DisplayTitle title="New User" />
      <LoginForm handleSubmit={this.handleSubmit}/>
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
