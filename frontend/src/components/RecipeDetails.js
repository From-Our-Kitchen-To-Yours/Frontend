import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom';

function RecipeDetails() {
    const [recipe, setRecipe] = useState({})
    const [isRecipe, setIsRecipe] = useState(false)
   
    // const history = useHistory();
    const { id }  = useParams();
//    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/${id}`)
          .then((r) => r.json())
          .then((recipe) => {
            setRecipe(recipe);
            setIsRecipe(!isRecipe)
            console.log(recipe)
          });
      }, [id]);


    //   console.log(recipe)

      const {image, title, analyzedInstructions } = recipe

    // const stepList = analyzedInstructions.filter((step)=> {
    //     <span>{step.step}</span>
    // })
    // const instructions = analyzedInstructions[0]
    // console.log(instructions)
    // const instructionsList = instructions.map((step)=> )
    
  
   
return (
    <section>
        <div className="recipe-details-box">
        <div className = "recipe-image">
            <img src={recipe.image}/>
        <h1>HELLO</h1>
        <button className="likes">LIKE ME</button>
    </div>
        <div className="details">
            <h2>{recipe.title}</h2>
            <p>these are the details!!</p>
        {isRecipe ? recipe.analyzedInstructions[0].steps.map(data=> {
            return (
                <ol>
                 <li>{data.step}</li>
                </ol>
                )
            }) 
        : null
        }
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