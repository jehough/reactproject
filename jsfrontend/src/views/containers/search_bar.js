import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

export default class SearchBar extends Component {

  render(){
    return(
            <Form inline>
              <FormControl type="text" placeholder="Search Our Products" className="searchBox"/>
              <Button variant="light">Search</Button>
            </Form>

  )
  }
}
