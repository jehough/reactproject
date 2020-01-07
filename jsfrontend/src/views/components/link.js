import React from 'react'
import {Link, Route} from 'react-router-dom'
import Items from '../containers/items'

const LinkDisplay = (props) =>{
  return(
  <div>
  <Link to={{
    pathname: `${props.path}/${props.category.id}`,
    state: {id: props.category.id}
  }}>{props.category.attributes.name}</Link>
  </div>
)
}
export default LinkDisplay
