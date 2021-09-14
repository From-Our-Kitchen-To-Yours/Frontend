import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function RecipeCard({title, vegan, vegetarian, id}) {

    return (
        <div>
            {title}
            <Link to={`/recipes/${id}`}>View Details</Link>
            {vegan ? <p>Vegan: ✔️</p> : <p>Vegan: ❌</p>}
            {vegetarian ? <p>Vegetarian: ✔️</p> : <p>Vegetarian: ❌</p>}
        </div>
    )
}

export default RecipeCard