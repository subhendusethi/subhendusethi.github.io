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
  return <div className="App-body">
    <NavBar/>
    <h2> Welcome to Subhendu Sethi's website!</h2>
    <p className="content">
      I am Subhendu Sethi. Former Computer Science and Engineering graduate from Indian Institute of Technology, Hyderabad.
      Currently working full time as a Software Engineer - II at Amazon Development Center, Bangalore.
    </p>
    <p className="content">
      Areas of interest: Scalable WebApps, Distributed Systems, Cloud System Architecture and Deep Learning.
    </p>
    <ContactBar/>
    <footer> Site is under construction. </footer>
  </div>;
}

function DefaultApp() {
  return <div className="App-body">
      <NavBar/>
      <img src={logo} className="App-logo" alt="logo" />
      <h4>Coming Soon!</h4>
    </div>;
}

function NavBar() {
  return <ul className="navbar">
      <li><a href="/">Home</a></li>
      <li><a href="/blurger-app">Blurger</a></li>
    </ul>;
}


function ContactBar() {
  return <div>
  <ul>
    <li><a href="https://github.com/subhendusethi" target="_blank" rel="noopener noreferrer" class="fa fa-github"></a></li>
    <li><a href="https://www.linkedin.com/in/subhendusethi" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"></a></li>
    <li><a href="https://www.facebook.com/mesubhendu" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"></a></li>
    <li><a href="https://www.instagram.com/subhendusethi" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"></a></li>
    <li><a href="mailto:mesubhendusethi@gmail.com?Subject=Hi" target="_top" className="fa fa-envelope-square"></a></li>
  </ul>
</div>;
}

export default App;
