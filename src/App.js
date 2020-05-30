import React from 'react';
import './App.css';
import Home from './Components/HOME/Home'
import BMR from './Components/BMR/BMR'
import YourData from './Components/YourData/YourData'

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
      <Route path="/MSPORTS" exact component={Home} />
      <Route path="/BMR" component={BMR} />
      <Route path="/YourData" component={YourData} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
