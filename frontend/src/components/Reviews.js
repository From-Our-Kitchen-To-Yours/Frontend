import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";

function Reviews() {
    const [blogPage, setBlogPage] = useState([])
    const [name, setUserName] = useState("");
    const [image, setUserImage] = useState("");
    const [blogText, setBlogText] = useState("");

    useEffect(()=> {
        fetch('http://localhost:3000/reviews')
        .then((r)=> r.json())
        .then(data => {
            setBlogPage(data)
            console.log(data)
        })
    },[])

    function handleSubmit(event){
        event.preventDefault()
        const newBlog = {
            id: uuid(),
            name,
            image,
            blogText,
        }
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
           }, body:JSON.stringify(newBlog)
        }).then((r)=> r.json())
        .then(setBlogPage([...blogPage, newBlog]))
        setUserName("");
        setUserImage("");
        setBlogText("");
        
    }
    const listOfBlogs = blogPage.map((blog)=>{
        return( 
        <div className="blog-card">
           <h1 className="blog-card-name">{blog.name}</h1>
         <img src={blog.image} className="blog-card-image"/>
          <br/>
         <p className="blog-card-text">{blog.blogText}</p>
         <button className="edit-button">Edit Post</button>
         </div>
        )
     })
    

    return (
             <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>What Is Everybody Saying About Us?</h4>
            </div>
            <div className="blog-list">
            {listOfBlogs}
            </div>
            <br/> <br/>
            <form onSubmit={handleSubmit} className="form">
                <h3> Let Us Know What You Think!</h3>
                <input type="text" placeholder="Your Name" value={name} onChange={(e)=> setUserName(e.target.value)}/> <br/>
                <input type="text" name="image" placeholder="Insert Image" value={image} onChange={(e)=> setUserImage(e.target.value)}/> <br/>
                <input className='blog-post-textbox' type="text" placeholder="...Your Story Here" value={blogText} onChange={(e)=> setBlogText(e.target.value)} rows={10}/><br/>
                <input type="submit" value="Add Your Post" onClick={handleSubmit}/>
            </form>
            <Link to={'/'} className='button'><button>Back To Home</button></Link>
        </div>
    );
}

export default Reviews;
