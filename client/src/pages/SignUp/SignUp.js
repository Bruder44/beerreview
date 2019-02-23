import React, { Component } from 'react';
import Header from './components/Header/Header'
import SignUpForm from './components/SignUpForm/SignUpForm'
import Footer from './components/Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header /> 
        <SignUpForm />
        <Footer /> 
      </div>
    );
  }
}

export default App;