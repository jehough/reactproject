import React, {Component} from 'react';
import CategoryList from '../components/category_list.js'

export default class Home extends Component {
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
      <CategoryList list={this.state.list}/>
      </div>)
  }
}
