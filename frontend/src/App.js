import './App.css';
import LandingPage from './components/LandingPage';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';


function App() {
  
//   const [randomRecipe, setRandomRecipe] = useState([])

//   useEffect(()=> {
//     fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=0e62ad5621ab4dddad3ee6e791fc9d6b')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
// },[])



  
  
  return (
    <div className="App">
      <Navbar />
      {/* <LandingPage randomRecipe={randomRecipe}/> */}
      <LandingPage />
    </div>
  );
}

export default App;

