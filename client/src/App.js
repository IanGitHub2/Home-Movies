import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieHomePage from './components/homepage/MovieHomePage';
import SinglePost from './components/single-element/SinglePost';
import AboutApp from './components/aboutpage/AboutApp';
import Genres from './components/genres/Genres';
import SelectedGenres from './components/genres/SelectedGenres'

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" component={MovieHomePage}/>
           <Route exact path="/Single-Post/:id" component={SinglePost}/>
           <Route exact path="/AboutApp" component={AboutApp}/>
           <Route exact path="/Genres" component={Genres}/>
           <Route exact path="/Selected-Genre/:id" component={SelectedGenres}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
