import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Individual from './pages/Individual';
import UploadForm from './pages/UploadForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={SignUp} />
          <Route exact path='/beer/:_id' component={Individual} />
          <Route exact path='/upload' component={UploadForm} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;