import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import CartList from '../components/cart_list.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




class Cart extends Component {
  constructor(){
    super()
    this.state = {
      signed_in: false
    }
  }


  render(){
    return(<div>
      <DisplayTitle title={"Your Cart"} />
      {this.state.signed_in ? <CartList list={this.props.items} price={this.props.price}/>:<Redirect to="/login"/>}
      </div>)
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    price: state.price
  }
}

export default connect(mapStateToProps)(Cart)
