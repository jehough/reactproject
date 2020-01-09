import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import CartList from '../components/cart_list.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




class Cart extends Component {



  render(){
    return(<div>
      <DisplayTitle title={"Your Cart"} />
      {this.props.signed_in ? <CartList list={this.props.items} price={this.props.price}/>:<Redirect to="/login"/>}
      </div>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.items,
    price: state.cart.price,
    signed_in: state.user.signed_in
  }
}

export default connect(mapStateToProps)(Cart)
