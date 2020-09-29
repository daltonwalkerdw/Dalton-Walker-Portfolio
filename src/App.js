import React from 'react';

import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App(props) {
  return (
    <div>
      
        <Router>
          
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Footer />
          
        </Router>

      
    </div>
  );
}

export default App;

