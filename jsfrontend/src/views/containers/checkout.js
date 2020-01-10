import React, {Component} from 'react';
import DisplayTitle from '../components/title'
import {Redirect} from 'react-router-dom'
import {makeObject, filterList} from '../functions/functions.js'
import {handleUserResponse} from '../../ducks/user/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CheckoutForm from '../components/checkout_form'

class Checkout extends Component {



  handleCheckout = (e) => {
    e.preventDefault()
    const sendItems = filterList(this.props.items)
    console.log(sendItems)
    const form = e.target
    const formData = {
    payment: form.payment.value,
    cardnumber: form.cardnumber.value,
    cardname: form.cardname.value,
    zipcode: form.cardzip.value,
    items: sendItems
    }
    const object = makeObject("POST", formData)

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
    message: state.user.message,
    items: state.cart.items
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({handleUserResponse}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
