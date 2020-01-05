import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './views/components/header'
import Home from './views/components/home'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
