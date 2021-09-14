import React from 'react'
import RecipeCard from './RecipeCard';

function Recipes({recipes, search, setSearch}) {
console.log(recipes);
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
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>All Recipes</h4>
            </div>
            <div className='search-bar'>
                <input 
                    type='text' 
                    value={search} 
                    placeholder="Search for Recipes..." 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            {recipeList}
        </div>
    )
}

export default Recipes;