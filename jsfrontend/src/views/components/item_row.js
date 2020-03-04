import React, {Component} from 'react'
import LinkDisplay from './link.js'
import ItemImage from './image.js'
import Button from 'react-bootstrap/Button'



class ItemRow extends Component {

  constructor(){
    super()
    this.state = {
      favorite: false
    }
  }

  handleClick = ()=> {this.state.favorite === true ? this.setState({favorite: false}):this.setState({favorite: true})}

  render(){
   return (<tr key={this.props.item.id}>
    <td> <ItemImage item={this.props.item} clsname="previewImg" /></td>
    <td><LinkDisplay object={this.props.item} path="items" /></td>
    <td>{this.props.item.attributes.price}</td>
    <td><Button onClick={this.handleClick}>{this.state.favorite ? "Unfavorite":"Favorite"}</Button></td>
    </tr>)
  }
}
export default ItemRow
