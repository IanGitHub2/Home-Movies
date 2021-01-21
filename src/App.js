import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieHomePage from './components/homepage/MovieHomePage';
import AboutApp from './components/aboutpage/AboutApp';
import Genres from './components/genres/Genres';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" component={MovieHomePage}/>
           <Route exact path="/AboutApp" component={AboutApp}/>
           <Route exact path="/Genres" component={Genres}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
