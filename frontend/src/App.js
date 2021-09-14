import React, { useState, useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import {Switch, Route} from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(setRecipes)
  }, []);

  return (
    
    <div className="App">
      <Navbar />
  <Switch>
        <Route path='/recipes/:id'>
          <RecipeDetails />
        </Route> 
        <Route exact path='/recipes'>
          <Recipes recipes={recipes} />
        </Route>
        <Route exact path='/'>
            <LandingPage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
  </Switch>
      
    </div>
  );
}

export default App;


