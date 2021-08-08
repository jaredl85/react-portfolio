import React from "react";
import Home from "./components/Home.js";
import NeChiro from "./components/NeChiro.js";
import Portfolio from "./components/Portfolio.js";
import DogWithin from "./components/DogWithin.js";
import NuCamp from "./components/NuCamp.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <ScrollToTop>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/nechiro" exact component={NeChiro} />
          <Route path="/dogwithin" exact component={DogWithin} />
          <Route path="/nucamp" exact component={NuCamp} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
    </ScrollToTop>
  );
}

export default App;
