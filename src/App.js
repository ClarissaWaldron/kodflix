import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from './Gallery'
import './App.css';
import tvShowInfo from './tvShowInfoId';


export default function App() {
  return (
    <Router>
    <div className="App">
      <br />
      <Route exact path ='/' component={Gallery} />
      <Route path ='/:tvShowInfoId' component={tvShowInfo} />
    </div>
    </Router>
  );
};