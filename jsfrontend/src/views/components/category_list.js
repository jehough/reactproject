import React from 'react';
import LinkDisplay from './link.js'

const CategoryList = props => (<div>
      <ul>
      {props.list.filter(category => category.attributes.name.includes(props.input)).map(category => <li key={category.id}><LinkDisplay object={category} path="categories" /></li>)}
      </ul>
    </div>)


export default CategoryList
