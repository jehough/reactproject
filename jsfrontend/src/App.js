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
import './App.css';
import './bootstrap.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
