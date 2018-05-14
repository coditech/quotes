import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Home } from './Home';
import { NotFound } from './NotFound'
import { About } from './About'
import { Articles } from './Articles'
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/articles/:quoteId?" component={Articles}/>
    <Route component={NotFound} />
  </Switch>
)

export default App;