import React from 'react'
import LinkDisplay from './link.js'
import ItemImage from './image.js'


const ItemRow = (props) => (<tr key={props.item.id}>
  <td> <ItemImage item={props.item} clsname="previewImg" /></td>
  <td><LinkDisplay object={props.item} path="items" /></td>
  <td>{props.item.attributes.price}</td>
  </tr>)

export default ItemRow
