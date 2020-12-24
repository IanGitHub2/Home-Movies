import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieHomePage from './components/homepage/MovieHomePage'
import './App.css';
import AboutApp from './components/homepage/AboutApp';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" component={MovieHomePage}/>
           <Route exact path="/AboutApp" component={AboutApp}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
