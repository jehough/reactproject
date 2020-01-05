import React, {Component} from 'react';

export default class Navbar extends Component {

  render(){
    return(<nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li>Home</li>
          <li>Categories</li>
        </ul>
      </div>
    </nav>)
  }
}
