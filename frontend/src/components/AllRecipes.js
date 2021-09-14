import React, { useState } from 'react';

function AllRecipes(){
///THIS DATA IS SET PROPERLY

// const [ recipeData, setRecipeData ] = useState({
// })
//     useEffect(()=> {
//         fetch('https://api.spoonacular.com/recipes/random?number=20&apiKey=0e62ad5621ab4dddad3ee6e791fc9d6b')
//         .then(resp => resp.json())
//         .then(data => setRecipeData({
//             recipe1:{
//                 title : data.recipes[0].title,
//                 image: data.recipes[0].image,
//                 sourceUrl : data.recipes[0].sourceUrl,
//                 cookTime : data.recipes[0].readyInMinutes,
//                 servings: data.recipes[0].servings,
//                 vegan : data.recipes[0].vegan,
//                 vegetarian : data.recipes[0].vegetarian,

//                     },
//             recipe2:{
//                 title : data.recipes[1].title,
//                 image: data.recipes[1].image,
//                 sourceUrl : data.recipes[1].sourceUrl,
//                 cookTime : data.recipes[1].readyInMinutes,
//                 servings: data.recipes[1].servings,
//                 vegan : data.recipes[1].vegan,
//                 vegetarian : data.recipes[1].vegetarian,
//             },
//             recipe3:{
//                 title : data.recipes[2].title,
//                 image: data.recipes[2].image,
//                 sourceUrl : data.recipes[2].sourceUrl,
//                 cookTime : data.recipes[2].readyInMinutes,
//                 servings: data.recipes[2].servings,
//                 vegan : data.recipes[2].vegan,
//                 vegetarian : data.recipes[2].vegetarian
//             },
//             recipe4:{
//                 title : data.recipes[3].title,
//                 image: data.recipes[3].image,
//                 sourceUrl : data.recipes[3].sourceUrl,
//                 cookTime : data.recipes[3].readyInMinutes,
//                 servings: data.recipes[3].servings,
//                 vegan : data.recipes[3].vegan,
//                 vegetarian : data.recipes[3].vegetarian
//             },
//             recipe5:{
//                 title : data.recipes[4].title,
//                 image: data.recipes[4].image,
//                 sourceUrl : data.recipes[4].sourceUrl,
//                 cookTime : data.recipes[4].readyInMinutes,
//                 servings: data.recipes[4].servings,
//                 vegan : data.recipes[4].vegan,
//                 vegetarian : data.recipes[4].vegetarian
//             },
//             recipe6:{
//                 title : data.recipes[5].title,
//                 image: data.recipes[5].image,
//                 sourceUrl : data.recipes[5].sourceUrl,
//                 cookTime : data.recipes[5].readyInMinutes,
//                 servings: data.recipes[5].servings,
//                 vegan : data.recipes[5].vegan,
//                 vegetarian : data.recipes[5].vegetarian
//             },
//             recipe7:{
//                 title : data.recipes[6].title,
//                 image: data.recipes[6].image,
//                 sourceUrl : data.recipes[6].sourceUrl,
//                 cookTime : data.recipes[6].readyInMinutes,
//                 servings: data.recipes[6].servings,
//                 vegan : data.recipes[6].vegan,
//                 vegetarian : data.recipes[6].vegetarian
//             },
//             recipe8:{
//                 title : data.recipes[7].title,
//                 image: data.recipes[7].image,
//                 sourceUrl : data.recipes[7].sourceUrl,
//                 cookTime : data.recipes[7].readyInMinutes,
//                 servings: data.recipes[7].servings,
//                 vegan : data.recipes[7].vegan,
//                 vegetarian : data.recipes[7].vegetarian
//             },
//             recipe9:{
//                 title : data.recipes[8].title,
//                 image: data.recipes[8].image,
//                 sourceUrl : data.recipes[8].sourceUrl,
//                 cookTime : data.recipes[8].readyInMinutes,
//                 servings: data.recipes[8].servings,
//                 vegan : data.recipes[8].vegan,
//                 vegetarian : data.recipes[8].vegetarian
//             },
//             recipe10:{
//                 title : data.recipes[9].title,
//                 image: data.recipes[9].image,
//                 sourceUrl : data.recipes[9].sourceUrl,
//                 cookTime : data.recipes[9].readyInMinutes,
//                 servings: data.recipes[9].servings,
//                 vegan : data.recipes[9].vegan,
//                 vegetarian : data.recipes[9].vegetarian
//             },
//             recipe11:{
//                 title : data.recipes[10].title,
//                 image: data.recipes[10].image,
//                 sourceUrl : data.recipes[10].sourceUrl,
//                 cookTime : data.recipes[10].readyInMinutes,
//                 servings: data.recipes[10].servings,
//                 vegan : data.recipes[10].vegan,
//                 vegetarian : data.recipes[10].vegetarian
//             },
//             recipe12:{
//                 title : data.recipes[11].title,
//                 image: data.recipes[11].image,
//                 sourceUrl : data.recipes[11].sourceUrl,
//                 cookTime : data.recipes[11].readyInMinutes,
//                 servings: data.recipes[11].servings,
//                 vegan : data.recipes[11].vegan,
//                 vegetarian : data.recipes[11].vegetarian
//             },
//             recipe13:{
//                 title : data.recipes[12].title,
//                 image: data.recipes[12].image,
//                 sourceUrl : data.recipes[12].sourceUrl,
//                 servings: data.recipes[12].servings,
//                 vegan : data.recipes[12].vegan,
//                 vegetarian : data.recipes[12].vegetarian
//             },
//             recipe14:{
//                 title : data.recipes[13].title,
//                 image: data.recipes[13].image,
//                 sourceUrl : data.recipes[13].sourceUrl,
//                 servings: data.recipes[13].servings,
//                 vegan : data.recipes[13].vegan,
//                 vegetarian : data.recipes[13].vegetarian
//             },
//             recipe15:{
//                 title : data.recipes[14].title,
//                 image: data.recipes[14].image,
//                 sourceUrl : data.recipes[14].sourceUrl,
//                 cookTime : data.recipes[14].readyInMinutes,
//                 servings: data.recipes[14].servings,
//                 vegan : data.recipes[14].vegan,
//                 vegetarian : data.recipes[14].vegetarian
//             },
//             recipe16:{
//                 title : data.recipes[15].title,
//                 image: data.recipes[15].image,
//                 sourceUrl : data.recipes[15].sourceUrl,
//                 cookTime : data.recipes[15].readyInMinutes,
//                 servings: data.recipes[15].servings,
//                 vegan : data.recipes[15].vegan,
//                 vegetarian : data.recipes[15].vegetarian
//             },
//             recipe17:{
//                 title : data.recipes[16].title,
//                 image: data.recipes[16].image,
//                 sourceUrl : data.recipes[16].sourceUrl,
//                 cookTime : data.recipes[16].readyInMinutes,
//                 servings: data.recipes[16].servings,
//                 vegan : data.recipes[16].vegan,
//                 vegetarian : data.recipes[16].vegetarian
//             },
//             recipe18:{
//                 title : data.recipes[17].title,
//                 image: data.recipes[17].image,
//                 sourceUrl : data.recipes[17].sourceUrl,
//                 cookTime : data.recipes[17].readyInMinutes,
//                 servings: data.recipes[17].servings,
//                 vegan : data.recipes[17].vegan,
//                 vegetarian : data.recipes[17].vegetarian
//             },
//             recipe19:{
//                 title : data.recipes[18].title,
//                 image: data.recipes[18].image,
//                 sourceUrl : data.recipes[18].sourceUrl,
//                 cookTime : data.recipes[18].readyInMinutes,
//                 servings: data.recipes[18].servings,
//                 vegan : data.recipes[18].vegan,
//                 vegetarian : data.recipes[18].vegetarian
//             },
//             recipe20:{
//                 title : data.recipes[19].title,
//                 image: data.recipes[19].image,
//                 sourceUrl : data.recipes[19].sourceUrl,
//                 cookTime : data.recipes[19].readyInMinutes,
//                 servings: data.recipes[19].servings,
//                 vegan : data.recipes[19].vegan,
//                 vegetarian : data.recipes[19].vegetarian
//             },

//         }))
//     },[])
}

export default AllRecipes;