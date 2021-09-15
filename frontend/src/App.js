import React, { useState, useEffect } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import {Switch, Route} from 'react-router-dom'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(setRecipes)
  }, [])

  const searchList = recipes.filter((recipe) => {
   return recipe.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/recipes/:id'>
        <RecipeDetails recipes={searchList}/>
      </Route> 
      <Route exact path='/recipes'>
        <Recipes recipes={searchList} search={search} setSearch={setSearch}/>
      </Route>
      <Route path='/reviews'>
        < Reviews /> 
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


// <Route exact path='/recipes'><Recipes recipes={searchList} search={search} setSearch={setSearch}/></Route>