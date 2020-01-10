import React, {Component} from 'react';
import LinkDisplay from './link.js'
import ItemImage from './image.js'
import Button from 'react-bootstrap/Button'
import {removeItem} from '../../ducks/cart/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class CartList extends Component {
  handleClick = (e) => {
    this.props.removeItem(e.target.value)
  }
  createrow = (itemObj, ind) => (<tr key={itemObj.item.id}>
    <td> <ItemImage item={itemObj.item} clsname="previewImg" /></td>
    <td><LinkDisplay object={itemObj.item} path="items" /></td>
    <td>{itemObj.item.attributes.price}</td>
    <td>{itemObj.quantity}</td>
    <td>{itemObj.item.attributes.price*itemObj.quantity}</td>
    <td><Button variant="info" onClick={this.handleClick} value={ind}>Remove Item</Button></td>
    </tr>)
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
        {this.props.list.map((itemObj, ind) => this.createrow(itemObj, ind))}
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
