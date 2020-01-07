import React, {Component} from 'react';
import LinkDisplay from './link.js'

export default class ItemList extends Component {
  createrow = (item) => {
      return(
        <tr>
          <td> <img src={`http://localhost:4000${item.attributes.image_url}`} alt={`${item.id} image`}/></td>
          <td><LinkDisplay object={item} path="items" /></td>
        </tr>)}
  render(){
    return(<div>
      {console.log(this.props.list)}
      <table>
        {this.props.list.map(item => {this.createrow(item)})}
      </table>

    </div>)
  }
}
