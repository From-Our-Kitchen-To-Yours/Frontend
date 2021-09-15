import React, { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";

function BlogForm() {
    const [blogPage, setBlogPage] = useState([])
    const [name, setUserName] = useState("");
    const [image, setUserImage] = useState("");
    const [blogText, setBlogText] = useState("");

    useEffect(()=> {
        fetch('http://localhost:3000/blogs')
        .then((r)=> r.json())
        .then(setBlogPage)
    })

    function handleSubmit(event){
        event.preventDefault()
        const newBlog = {
            id: uuid(),
            name,
            image,
            blogText,
        }
        fetch('http://localhost:3000/blogs',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
           }, body:JSON.stringify(newBlog)
        }).then((r)=> r.json())
        .then(setBlogPage([newBlog]))
        setUserName("");
        setUserImage("");
        setBlogText("");
        
    }

    return (
             <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>Blog Posts</h4>
            </div>
            <h3> Share Your Story!</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={name} onChange={(e)=> setUserName(e.target.value)}/> <br/>
                <input type="text" name="image" placeholder="Share A Pic" value={image} onChange={(e)=> setUserImage(e.target.value)}/> <br/>
                <input className='blog-post-textbox' type="text" placeholder="...Your Story Here" value={blogText} onChange={(e)=> setBlogText(e.target.value)}/><br/>
                <input type="submit" value="Add Your Post" onClick={handleSubmit}/>
            </form>
        </div>
    );
}

export default BlogForm;
