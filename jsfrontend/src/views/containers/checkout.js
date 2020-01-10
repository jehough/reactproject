import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import {makeObject} from '../functions/functions.js'
import {handleUserResponse} from '../../ducks/user/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Checkout extends Component {



  handleCheckout = (e) => {
    e.preventDefault()
  }
  render(){
    return(<div>
      <DisplayTitle title="Checkout" />
      <CheckoutForm handleCheckout={this.handleCheckout} />
    </div>)
  }
}


const mapStateToProps = state => {
  return {
    signed_in: state.user.signed_in,
    message: state.user.message
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({handleUserResponse}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
