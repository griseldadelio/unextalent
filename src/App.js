import React from 'react';
import AOS from 'aos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './screen/Home';
import { Selection } from './screen/Selection';
import { Evaluation } from './screen/Evaluation';
import { Training } from './screen/Training';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/selection" component={Selection} />
        <Route path="/evaluation" component={Evaluation} />
        <Route path="/training" component={Training} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
