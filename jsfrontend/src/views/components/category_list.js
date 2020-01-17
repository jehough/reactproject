import React from 'react';
import LinkDisplay from './link.js'

const CategoryList = props => (<div>
      <ul>
      {props.list.map(category => <li key={category.id}><LinkDisplay object={category} path="categories" /></li>)}
      </ul>
    </div>)


export default CategoryList
