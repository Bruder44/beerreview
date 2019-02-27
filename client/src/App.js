import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;