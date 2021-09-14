import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null)
   
    const history = useHistory();
    const { id } = useParams();
   console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${id}`)
          .then((r) => r.json())
          .then((recipeInfo) => {
            setRecipe(recipeInfo);
            console.log(recipeInfo)
          });
      }, [id]);

      const { title, image } = recipe

    
  
    
return (
    <section>
        <div className="recipe-details-box">
        <div className = "recipe-image">
        <h1>HELLO</h1>
        <button className="likes">LIKE ME</button>
    </div>
        <div className="details">
            <h2>{title}</h2>
            <p>these are the details!!</p>
        </div>
        <br />
        {/* <Link onClick={()=> history.push('/recipes')}>
            Go Back
        </Link> */}

    </div>
    </section>
    )
}

export default RecipeDetails