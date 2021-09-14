import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import RecipeDetails from './RecipeDetails'
import '../App.css'

function RecipeCard({id, title, vegan, vegetarian}) {


    return (
        <div className="recipes">
            <h4>{title}</h4>
            {vegan ? <p>Vegan: ✔️</p> : <p>Vegan: ❌</p>}
            {vegetarian ? <p>Vegetarian: ✔️</p> : <p>Vegetarian: ❌</p>}
            <Link to={`/recipes/${id}`}><button>Cook This</button></Link>
        </div>
    )
}

export default RecipeCard