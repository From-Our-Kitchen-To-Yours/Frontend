import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import RecipeDetails from './RecipeDetails'

function RecipeCard({id, title, vegan, vegetarian}) {


    return (
        <div>
            <Link to={`/recipes/${id}`}>{title}</Link>
            {vegan ? <p>Vegan: ✔️</p> : <p>Vegan: ❌</p>}
            {vegetarian ? <p>Vegetarian: ✔️</p> : <p>Vegetarian: ❌</p>}
        </div>
    )
}

export default RecipeCard