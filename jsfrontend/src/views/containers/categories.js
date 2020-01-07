import React, {Component} from 'react';

export default class Home extends Component {

  render(){
    return(<div>
      <h1>Category: {this.props.title}</h1>

    </div>)
  }
}
