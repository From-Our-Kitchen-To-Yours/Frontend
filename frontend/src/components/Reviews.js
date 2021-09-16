import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";

function Reviews({setIssueRequest, issueRequest}) {
    const [reviewPage, setReviewPage] = useState([])
    const [name, setUserName] = useState("");
    const [image, setUserImage] = useState("");
    const [reviewText, setReviewText] = useState("");

    useEffect(()=> {
        fetch('http://localhost:3000/reviews')
        .then((r)=> r.json())
        .then(data => {
            setReviewPage(data)
            console.log(data)
        })
    },[])

    function handleSubmit(event){
        event.preventDefault()
        const newReview = {
            id: uuid(),
            name,
            image,
            reviewText,
        }
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
           }, body:JSON.stringify(newReview)
        }).then((r)=> r.json())
        .then(setReviewPage([...reviewPage, newReview]))
        setUserName("");
        setUserImage("");
        setReviewText("");
        
    }
    const listOfReviews = reviewPage.map((review)=>{
        return( 
        <div className="review-card">
           <h1 className="review-card-name">{review.name}</h1>
         <img src={review.image} className="review-card-image"/>
          <br/>
         <p className="review-card-text">{review.reviewText}</p>
         <button className="edit-button">Edit Post</button>
         <button className="edit-button" onClick={()=>handleDeleteReview(review)}>Delete Post</button>
         </div>
        )
     })

    //  function handleEditPost(blog){
    //      fetch(`http://localhost:3000/reviews/${blog.id}`,{
    //          method: "PATCH",
    //          headers: {
    //              "Content-Type": "application/json"
    //          },
    //          body: JSON.stringify({blogText: "WHAT NEEDS TO BE UPDATED"})
    //      })
    //          .then(r=> r.json())
    //          .then(data => console.log(data.blogText))
    //  }
    
    function handleDeleteReview(review){
        fetch(`http://localhost:3000/reviews/${review.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }). then(
            setIssueRequest(!issueRequest)
        )
    }

    return (
             <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>What Is Everybody Saying About Us?</h4>
            </div>
            <div className="blog-list">
            {listOfReviews}
            </div>
            <br/> <br/>
            <form onSubmit={handleSubmit} className="form">
                <h3> Let Us Know What You Think!</h3>
                <input type="text" placeholder="Your Name" value={name} onChange={(e)=> setUserName(e.target.value)}/> <br/>
                <input type="text" name="image" placeholder="Insert Image" value={image} onChange={(e)=> setUserImage(e.target.value)}/> <br/>
                <input className='review-post-textbox' type="text" placeholder="...Your Story Here" value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}/><br/>
                <input type="submit" value="Add Your Post" onClick={handleSubmit}/>
            </form>
            <Link to={'/'} className='button'><button>Back To Home</button></Link>
        </div>
    );
}

export default Reviews;
