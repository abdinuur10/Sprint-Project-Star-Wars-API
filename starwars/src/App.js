import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch } from "react-router-dom"
import axios from 'axios';
import StarList from "./components/StarList";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [star, setStar] = useState([]); 

  useEffect(() => {
    const getStars = () => { 
      axios
        .get('https://swapi.dev/')
        .then(response => {
          console.log(response)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getStars();
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Switch>

      <Route path="/StarList/:starID"> 
          <MovieCard star = {StarList}/>
        </Route>
        <Route path="/" >
          <MovieList star = {StarList}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
