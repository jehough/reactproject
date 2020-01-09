import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {addToCart} from '../../ducks/cart/actions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class   AddCartButton extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToCart(this.props.item, document.getElementById('selectQuantity').value)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="addToCartForm">
      <h4>Quantity</h4>
      <select id="selectQuantity" name="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <Button variant="info" type="submit" >Add to Cart</Button>
      </form>
  )
}
}

const mapDispatchToProps = dispatch => bindActionCreators({addToCart}, dispatch)

export default connect(null, mapDispatchToProps)(AddCartButton)
