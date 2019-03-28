import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Individual from './pages/Individual';
import UploadForm from './pages/UploadForm';
import './App.css';
// import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import Amplify, { Analytics, Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';

Amplify.configure(awsmobile);

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