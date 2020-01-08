import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Link, withRouter} from 'react-router-dom';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      term: ""
    }
  }

  handleChange = (event) => {
    this.setState({term: event.target.value})
  }


  render(){

    return(
        <div>
              <input type="text" placeholder="Search Our Products" className="searchBox" onChange={this.handleChange}/>
              <Link to={{pathname: '/hairydogs',
                          state: {term: this.state.term,
                                  name: "Search Results",
                                  url:"http://localhost:4000/items"}}} >
                                  <Button variant="light">Search</Button></Link>
        </div>
  )
  }
}

withRouter(SearchBar)
