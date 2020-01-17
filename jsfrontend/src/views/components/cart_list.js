import React, {Component} from 'react';
import LinkDisplay from './link.js'
import ItemImage from './image.js'
import CartRow from './cart_row.js'
import Button from 'react-bootstrap/Button'
import {removeItem} from '../../ducks/cart/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CartList extends Component {
  handleClick = (e) => {
    this.props.removeItem(e.target.value)
  }

  render(){
    return(<div>
      <table>
      <tbody>
        <tr>
          <th colspan="2">Item</th>
          <th> Price</th>
          <th> Quantity Ordered</th>
          <th> Item Total</th>
        </tr>
        {this.props.list.map((itemObj, ind) => <CartRow itemObj={itemObj} ind={ind} handleClick={this.handleClick}/>)}
        <tr>
          <td colspan="4">Cart Total:</td>
          <td> {(this.props.price).toFixed(2)}</td>
        </tr>
      </tbody>
      </table>

    </div>)
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({removeItem}, dispatch)

export default connect(null, mapDispatchToProps)(CartList)
