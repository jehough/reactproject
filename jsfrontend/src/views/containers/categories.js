import React, {Component} from 'react';
import CategoryList from '../components/category_list.js';
import DisplayTitle from '../components/title.js'

import Items from './items'



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
      <DisplayTitle title={this.props.title} />
      <CategoryList list={this.state.list}/>

      </div>)
  }
}
