import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Redirect, withRouter} from 'react-router-dom';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      term: "",
      showSearch: false
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, term: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({...this.state, showSearch: true})
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search Our Products" className="searchBox" onChange={this.handleChange}/>
              <Button variant="light" type="submit">Search</Button>
        </form>

        {this.state.showSearch ? (
        <Redirect to={{pathname: '/items',
                    state: {term: this.state.term,
                            name: "Search Results",
                            url:"http://localhost:4000/items"}}} />):null}

      </div>
  )
  }
}

export default withRouter(SearchBar)
