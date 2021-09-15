function BlogForm() {
    return (
             <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>Blog Posts</h4>
            </div>
            <h3> Share Your Story!</h3>
            <form>
                <input type="text" placeholder="Your Name"/> <br/>
                <input type="text" placeholder="Share A Pic"/> <br/>
                <input className='blog-post-textbox' type="text" placeholder="...Your Story Here"/><br/>
                <input type="submit" value="Add Your Post"/>
            </form>
        </div>
    );
}

export default BlogForm;
