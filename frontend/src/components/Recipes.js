import React from 'react'
import RecipeCard from './RecipeCard';

function Recipes({recipes}) {
// console.log(recipes);
    const recipeList = recipes.map((recipe) => (
        <RecipeCard key={recipe.id}
            id={recipe.id}
            title={recipe.title} 
            vegan={recipe.vegan}
            vegetarian={recipe.vegetarian}    
        />
    ))
    return (
        <div>
            {recipeList}
        </div>
    )
}

export default Recipes;