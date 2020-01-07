import React from 'react'
const Link = (props) => <a href={`http://localhost:4000/${props.path}/${props.category.id}`}>{props.category.attributes.name}</a>
export default Link
