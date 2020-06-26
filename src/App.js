import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieHomePage from './components/homepage/MovieHomePage'
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/MovieHomePage" component={MovieHomePage}/>\
         </Switch>
       </Router>
    </div>
  );
}

export default App;
