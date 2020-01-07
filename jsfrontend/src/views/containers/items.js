import React, {Component} from 'react';

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

  
  render(){
    return(<div>
      <p>This is where the items will go</p>
      <p>{this.props.location.state.id}</p>
      </div>)
  }
}
