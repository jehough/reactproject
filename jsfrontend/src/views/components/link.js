import React from 'react'
const Link = (props) => <a href={`http://localhost:4000/categories/${props.id}`}>{props.attributes.name}</a>
