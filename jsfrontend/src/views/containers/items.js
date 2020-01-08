import React, {Component} from 'react';
import DisplayTitle from '../components/title.js'
import ItemList from '../components/item_list.js'
export default class Items extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  runSearch = (json) => {
    if (this.props.location.state.term){
      console.log("search it")
    }
    else{
    this.setState({list: json.data})}
  }

  componentDidMount(){
    fetch(this.props.location.state.url)
      .then(resp=> resp.json())
      .then(json => this.runSearch(json))
  }

  render(){
    return(<div>
      <DisplayTitle title={this.props.location.state.name} />
      <ItemList list={this.state.list} />
      </div>)
  }
}
