import React, {Component} from 'react';
import LinkDisplay from './link.js'

export default class ItemList extends Component {
  createrow = (item) => (<tr key={item.id}>
    <td> <img src={`http://localhost:4000${item.attributes.image_url}`} className="previewImg" alt={`${item.id} image`}/></td>
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
