import React from 'react';
import RootComponent from './root_component'
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
import { connect } from 'react-redux'
import './App.css';
import './bootstrap.css'

function App() {
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
    </div>
    </Router>
  );
}


export default App;
