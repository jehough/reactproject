import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import ItemImage from '../components/image.js'
import Button from 'react-bootstrap/Button';
export default class ItemShow extends Component {
  constructor(){
    super()
    this.state = {
      item: {},
      loading: true
    }
  }
  displayCard = () => (
    <div>
    <ItemImage item={this.state.item} clsname="showImage" />
    <p><strong>Description: </strong>{this.state.item.attributes.description}</p>
    <p className="price">{`$${this.state.item.attributes.price}`}</p>
    <Button variant="info">Add to Cart</Button>
    </div>
  )

  componentDidMount(){
    fetch(`http://localhost:4000/items/${this.props.location.state.id}`)
      .then(resp=> resp.json())
      .then(json => this.setState({item: json.data, loading: false}))
  }

  render(){
    return(<div>
      <DisplayTitle title={this.props.location.state.name} />
      {this.state.loading ? <h3>Loading</h3>:this.displayCard()}
      </div>)
  }
}
