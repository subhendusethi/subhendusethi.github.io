import React from 'react';
import logo from './app-logo.png';
import './App.css';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Switch>
    <Route path="/blurger-app"> 
      <DefaultApp />
    </Route>
    <Route path="/">
      <HomeApp />
    </Route>
  </Switch>
    
  );
}

function HomeApp() {
  return <div className="App">
  <header className="App-header">
    <h2> Welcome to subhendusethi.github.io </h2>
    <p>
    I am Subhendu Sethi. Former Computer Science and Engineering graduate from Indian Institute of Technology, Hyderabad.<br/> 
    Currently working full time as a Software Development Engineer - II at Amazon Development Center, Bangalore.
    </p>
    <h4> Site is under Construction </h4>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" className="Cat-logo" alt="logo" />
  </header>
</div>;
}
function DefaultApp() {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Coming Soon!</h4>
    </header>
</div>;
}

export default App;
