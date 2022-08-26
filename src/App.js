import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from './components/Home/index';
import ContactUs from './components/ContactUs'
import Plans from './components/Plans';
import AboutUs from './components/AboutUs';
import FoodOrder from './components/FoodOrder';

import './App.css';

function App() {
  return (
    <div className="App">

       <div>
        <Switch>

          <Route path="/about"> <AboutUs /> </Route>
          <Route path="/contact"> <ContactUs /> </Route>
          <Route path="/plans"> <Plans /> </Route>
          <Route path="/food-order"> <FoodOrder /> </Route>
          <Route path="/"> <Home /> </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
