import React, {Component} from 'react';

export default class CategoryList extends Component {

  render(){
    return(<div>
      <ul>
      {this.props.list.map(category => <li>{category.attributes.name}</li>)}
      </ul>
    </div>)
  }
}
