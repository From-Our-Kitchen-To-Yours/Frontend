import React, { useEffect, useState } from 'react';

function LandingPage({randomRecipe}){


    console.log(randomRecipe)
 

 


return (
    <>
    <h1> HOWDY </h1> 
<h2>{randomRecipe.title}</h2>
<img src={randomRecipe.image}/>
<button><a href={randomRecipe.sourceUrl}>Cook This</a></button>
 

    </>
)
}


export default LandingPage;