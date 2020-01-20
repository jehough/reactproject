
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/components/home'
import Items from './views/containers/items'
import Navbar from './views/containers/navbar'
import Categories from './views/containers/categories'
import ItemShow from './views/containers/item_show'
import Cart from './views/containers/cart'
import Login from './views/containers/login'
import NewUser from './views/containers/newuser'
import Checkout from './views/containers/checkout'
import './App.css';
import './bootstrap.css'

export default class RootComponent extends Component{
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Switch>
        <Route path="/categories/:catId" component={Items}/>
        <Route path="/categories" render={routerProps => <Categories {...routerProps}/>} />
        <Route path="/items/:itemID" component={ItemShow} />
        <Route exact path="/items" render={routerProps => <Items {...routerProps}/>} />
        </Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/newuser" component={NewUser} />
        <Route path="/checkout" component={Checkout} />
      </div>
      </Router>
    )
  }
}
