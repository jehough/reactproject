import React, {Component} from 'react';
import LinkDisplay from './link.js'
import ItemImage from './image.js'
export default class ItemList extends Component {
  createrow = (item) => (<tr key={item.id}>
    <td> <ItemImage item={item} clsname="previewImg" /></td>
    <td><LinkDisplay object={item} path="items" /></td>
    <td>{item.attributes.price}</td>
    </tr>)
  render(){
    return(<div>
      <table>
      <tbody>
        {this.props.list.map(item => this.createrow(item))}
      </tbody>
      </table>

    </div>)
  }
}
