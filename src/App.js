import Home from './components/Home.js';
import NeChiro from './components/NeChiro.js';
import Portfolio from './components/Portfolio.js';
import DogWithin from './components/DogWithin.js';
import NuCamp from './components/NuCamp.js';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <ScrollToTop>
          <Route exact path='/' component={Home} />
          <Route exact path='/nechiro' component={NeChiro} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/nucamp' component={NuCamp} />
          <Route exact path='/dogwithin' component={DogWithin} />
        </ScrollToTop>
      </Switch>
    </div>
  );
}

export default App;
