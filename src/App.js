import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// imported components
import Home from './components/home/Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />

        </div>
      </Router>
    );
  }
}
