import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to='/recipes' style={{ textDecoration: 'none' }}><li>Recipes</li></Link>
                <Link to='/blogs' style={{ textDecoration: 'none' }}><li>Blog</li></Link>
            </ul>
        </div>
    )
}

export default Navbar