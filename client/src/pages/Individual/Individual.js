import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import BeerCard from '../../components/BeerCard/BeerCard';
import Footer from '../../components/Footer';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header /> 
        <BeerCard />
        <Footer /> 
      </div>
    );
  }
}

export default App;