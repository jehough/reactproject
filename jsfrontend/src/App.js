import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../views/components/header'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
