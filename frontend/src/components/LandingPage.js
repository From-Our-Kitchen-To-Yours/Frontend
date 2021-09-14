import React, { useEffect, useState } from 'react';
import AllRecipes from './AllRecipes';
///THIS LINK IMPORT IS NOT WORKING
// import { Link } from 'react-router-dom';

function LandingPage({randomRecipe}){
    // console.log(randomRecipe)
return (
    <div className="container">
        <div className="welcome">
            <h2>Welcome to</h2>
            <h1>From Our<br/>
                <span>Kitchen</span><br/>
                To Yours</h1>
            <p><span>From Our Kitchen To Yours</span> is your one stop spot to find new, 
                delicious, easy to follow recipes for you to make at home!
            </p>
        </div>
        <div className='random'>
            <img src="https://images.squarespace-cdn.com/content/v1/59f0e6beace8641044d76e9c/1590772020832-BNJKTLRU9SYQPH9YFXFX/meal%2Bpic%2B3%2Bfor%2Bhome%2Bpage.jpg?format=1500w"/>
            <br/>
            {/* <button><a href={randomRecipe.sourceUrl}>Cook This Meal</a></button> */}
            {/* LINK IS SOMETHING LIKE THAT BUT DOESNT WORK YET */}
            <Link to={'./components/AllRecipes'}>See Our Recipes</Link>
        </div>
    </div>
)
}


export default LandingPage;