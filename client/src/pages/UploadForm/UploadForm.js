import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import UploadForm from '../../components/UploadForm/UploadForm'
import Footer from '../../components/Footer'
// import logo from './logo.svg';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header /> 
        <UploadForm />
        <Footer /> 
      </div>
    );
  }
}

export default App;