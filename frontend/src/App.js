import React, { useState, useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(setRecipes)
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Route exact path='/'><LandingPage/></Route>
      <Route exact path='/recipes'><Recipes recipes={recipes} /></Route>
    </div>
  );
}

export default App;


