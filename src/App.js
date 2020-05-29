import React from 'react';
import './App.css';
import Home from './Components/HOME/Home'
import BMR from './Components/BMR/BMR'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
    <Switch>
      <Route path="/Home" exact component={Home} />
      <Route path="/BMR" component={BMR} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
