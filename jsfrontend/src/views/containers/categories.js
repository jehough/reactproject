import React, {Component} from 'react';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }


  render(){
    return(<div>
      <h1>Category: {this.props.title}</h1>
      <CategoryList list={this.state.list}/>
      </div>)
  }
}
