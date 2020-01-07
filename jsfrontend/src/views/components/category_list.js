import React, {Component} from 'react';
import Link from './link.js'

export default class CategoryList extends Component {

  render(){
    return(<div>
      <ul>
      {this.props.list.map(category => <li key={category.id}><Link category={category} path="categories" /></li>)}
      </ul>
    </div>)
  }
}
