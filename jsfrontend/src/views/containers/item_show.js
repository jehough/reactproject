import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
export default class ItemShow extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/items/${this.props.location.state.id}`)
      .then(resp=> resp.json())
      .then(json => this.setState({list: json.data}))
  }

  render(){
    return(<div>
      <DisplayTitle title={this.props.location.state.name} />
      </div>)
  }
}
