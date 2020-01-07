import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './views/components/header'
import Home from './views/components/home'
import Items from './views/containers/items'
import Navbar from './views/components/navbar'
import Categories from './views/containers/categories'
import './App.css';
import './bootstrap.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/categories/fish" render={routerProps => <Categories {...routerProps} division="fish" title="Fish and Marine Life"/>} />
      <Route path="/categories/equipment" render={routerProps => <Categories {...routerProps} division="equipment" title="Equipment and Accessories"/>} />
      <Route path="/categories/:catID" component={Items} />
    </div>
    </Router>
  );
}

export default App;
