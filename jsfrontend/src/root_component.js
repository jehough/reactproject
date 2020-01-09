
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/components/home'
import Items from './views/containers/items'
import Navbar from './views/containers/navbar'
import Categories from './views/containers/categories'
import ItemShow from './views/containers/item_show'
import Cart from './views/containers/cart'
import Login from './views/containers/login'
import { connect } from 'react-redux'
import './App.css';
import './bootstrap.css'

export default class RootComponent extends Component{
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" render={routerProps => <Categories {...routerProps}/>} />
        <Route path="/categories/:catID" component={Items} />
        <Route path="/items/:itemID" component={ItemShow} />
        <Route exact path="/items" render={routerProps => <Items {...routerProps}/>} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}
