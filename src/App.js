import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from './Gallery'
import './App.css';
import tvShowInfo from './tvShowInfoId/tvShowInfoId';
import notFound from './notFound';
import 'animate.css'


export default function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path ='/' component={Gallery} />
      <Route path = '/not-found' component={notFound} />
      <Route path ='/:tvShowInfoId' component={tvShowInfo} />
      </Switch>
    </div>
    </Router>
  );
};