import React, {Component} from 'react';

export default class Navbar extends Component {

  render(){
    return(<nav className="navbar navbar-dark bg-primary" >
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">Home</li>
          <li className="nav-item">Categories</li>
        </ul>
      </div>
    </nav>)
  }
}
