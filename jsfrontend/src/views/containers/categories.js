import React, {Component} from 'react';
import CategoryList from '../components/category_list.js'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
export default class Categories extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

 componentDidMount(){
   fetch(`http://localhost:4000/${this.props.division}`)
     .then(resp=> resp.json())
     .then(json => this.setState({list: json.data}))
 }
  render(){
    return(<div>
      <h1>Category: {this.props.title}</h1>
      <CategoryList path={this.props.match.path} list={this.state.list} divison={this.props.division}/>

      </div>)
  }
}
