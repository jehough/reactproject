import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './views/components/header'
import Home from './views/components/home'
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
      <Route path="/fish" render={() => <Categories division="fish" />} />
      <Route path="/equipment" render={() => <Categories division="equipment" />} />
    </div>
    </Router>
  );
}

export default App;
