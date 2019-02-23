import React, { Component } from 'react';
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header /> 
        <Carousel />
        <Footer /> 
      </div>
    );
  }
}

export default App;