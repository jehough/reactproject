import React from 'react'
import {Link} from 'react-router-dom'
const LinkDisplay = (props) =>{
  return(
  <Link to={`${this.props.path}`}>{props.category.attributes.name}</>
)
}
export default LinkDisplay
