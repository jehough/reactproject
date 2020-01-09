import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import DisplayCard from '../components/display_card.js'
export default class ItemShow extends Component {
  constructor(){
    super()
    this.state = {
      item: {},
      loading: true
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/items/${this.props.location.state.id}`)
      .then(resp=> resp.json())
      .then(json => this.setState({item: json.data, loading: false}))
  }

  render(){
    return(<div>
      <DisplayTitle title={this.props.location.state.name} />
      {this.state.loading ? <h3>Loading</h3>:<DisplayCard item={this.state.item}/>}
      </div>)
  }
}
