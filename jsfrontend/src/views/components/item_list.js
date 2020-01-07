import React, {Component} from 'react';
import LinkDisplay from './link.js'

export default class ItemList extends Component {

  render(){

    return(<div>
      <table>
      {this.props.list.map(item => {
        <tr key={item.id}>
        <td> <img src={`http://localhost:4000${item.attributes.image_url}`} alt="item image"/></td>
        <td><LinkDisplay object={item} path="items" /></td>
        </tr>})}
      </table>

          </div>)
  }
}
