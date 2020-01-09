import React, {Component} from 'react';
import LinkDisplay from './link.js'
import ItemImage from './image.js'
export default class CartList extends Component {
  createrow = (itemObj) => (<tr key={itemObj.item.id}>
    <td> <ItemImage item={itemObj.item} clsname="previewImg" /></td>
    <td><LinkDisplay object={itemObj.item} path="items" /></td>
    <td>{itemObj.item.attributes.price}</td>
    <td>{itemObj.quantity}</td>
    <td>{itemObj.item.attributes.price*itemObj.quantity}</td>
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
        {this.props.list.map(itemObj => this.createrow(itemObj))}
        <tr>
          <td colspan="4">Cart Total:</td>
          <td> {this.props.price}</td>
        </tr>
      </tbody>
      </table>

    </div>)
  }
}
