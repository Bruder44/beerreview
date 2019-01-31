import React, { Component } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Carousel />
        <Footer /> 
      </div>
    );
  }
}

export default App;
