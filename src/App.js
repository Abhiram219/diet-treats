import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from './components/Home/index';
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs';

import './App.css';

function App() {
  return (
    <div className="App">

       <div>
        <Switch>

          <Route path="/about"> <AboutUs /> </Route>
          <Route path="/contact"> <ContactUs /> </Route>
          <Route path="/"> <Home /> </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
