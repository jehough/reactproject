import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import CartList from '../components/cart_list.js'
import {connect} from 'react-redux'




class Cart extends Component {


  render(){
    return(<div>
      <DisplayTitle title={"Your Cart"} />
      <CartList list={this.props.items} price={this.props.price}/>
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
