import React from 'react';
import Button from 'react-bootstrap/Button';
import LinkDisplay from './link.js';
import ItemImage from './image.js'


const CartRow = props => (<tr key={props.itemObj.item.id}>
  <td> <ItemImage item={props.itemObj.item} clsname="previewImg" /></td>
  <td><LinkDisplay object={props.itemObj.item} path="items" /></td>
  <td>{props.itemObj.item.attributes.price}</td>
  <td>{props.itemObj.quantity}</td>
  <td>{props.itemObj.item.attributes.price*props.itemObj.quantity}</td>
  <td><Button variant="info" onClick={props.handleClick} value={props.ind}>Remove Item</Button></td>
  </tr>)

export default CartRow
