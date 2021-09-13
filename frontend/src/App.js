import './App.css';
import LandingPage from './components/LandingPage';
import React, { useEffect, useState } from 'react';

function App() {
  
  const [randomRecipe, setRandomRecipe] = useState([
    
  ])

  useEffect(()=> {
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=83125be0e73e44f79eadf0234bb150e7')
    .then(resp => resp.json())
    .then(data => setRandomRecipe({
      title : data.recipes[0].title,
      image: data.recipes[0].image,
      sourceUrl : data.recipes[0].sourceUrl
    }))
},[])
  
  return (
    <div className="App">
      <h1>Hiya</h1>
      <p> I added this </p>
      <LandingPage randomRecipe={randomRecipe}/>
    </div>
  );
}

export default App;
