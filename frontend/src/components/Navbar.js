import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
   
    return (
        <div className='navbar'>
            <ul>
            <Link to='/'>
                     Home
            </Link>
            <Link to='/recipes'>
                    Recipes
            </Link>
                <li>Blog</li>
            </ul>
        </div>
    )
}

export default Navbar