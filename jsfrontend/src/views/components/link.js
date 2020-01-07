import React from 'react'
import {Link} from 'react-router-dom'


const LinkDisplay = (props) =>{
  return(
  <div>
  <Link to={{
    pathname: `${props.path}/${props.object.id}`,
    state: {id: props.object.id,
            name: props.object.attributes.name}
  }}>{props.object.attributes.name}</Link>
  </div>
)
}
export default LinkDisplay
