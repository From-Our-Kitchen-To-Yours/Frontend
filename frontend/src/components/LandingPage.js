import React, { useEffect, useState } from 'react';

function LandingPage({randomRecipe}){


    console.log(randomRecipe)
 

  const newVariable = <img src={randomRecipe.image}/>



// const image = randomRecipe.map((info)=> {
// return (
// <img src={info.image}/>
//     )})



    
   

    
// let image = randomRecipe.map((info)=> {
//    return ( 
//    <img src={info.image}/>
//     )

// })


return (
    <>
    <h1> HOWDY </h1>
 {newVariable}

    </>
)
}


export default LandingPage;