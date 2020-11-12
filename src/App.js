import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

const App = () => {

    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
              
            </div>
          </div>
        </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
