import React, {Component} from 'react';
import ItemList from '../components/item_list.js'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
export default class Items extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

 }
  render(){
    return(<div>
      <h1>Category: {this.props.title}</h1>
      <ItemList path={this.props.match.path} list={this.state.list} divison={this.props.division}/>
      </div>)
  }
}
