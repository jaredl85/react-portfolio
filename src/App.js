import React from "react";
import Home from "./components/Home.js";
import NeChiro from "./components/NeChiro.js";
import Portfolio from "./components/Portfolio.js";
import DogWithin from "./components/DogWithin.js";
import NuCamp from "./components/NuCamp.js";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <ScrollToTop>
            <Route path="/nechiro" component={NeChiro} />
            <Route path="/dogwithin" component={DogWithin} />
            <Route path="/nucamp" component={NuCamp} />
            <Route path="/portfolio" component={Portfolio} />
            <Route exact path="/react-portfolio" component={Home} />
            <Redirect to='/react-portfolio' />
          </ScrollToTop>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
