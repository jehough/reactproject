import React, {Component} from 'react';
import LinkDisplay from './link.js'

export default class CategoryList extends Component {

  render(){
    return(<div>
      <ul>
      {this.props.list.map(category => <li key={category.id}><LinkDisplay object={category} path="categories" /></li>)}
      </ul>
    </div>)
  }
}
