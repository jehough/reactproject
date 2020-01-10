import React from 'react'
import Button from 'react-bootstrap/Button'

export default const LoginButton = props => <Button variant="light" onClick={props.onClick}>{props.text}</Button>
