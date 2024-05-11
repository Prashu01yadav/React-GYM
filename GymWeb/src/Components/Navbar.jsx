import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='nav'>
        <div className='logo'>
        {/* <img src="logo.webp" alt="none"  /> */}
        
        <Link to="/">
        <h1><a>Excellence Fitness</a></h1></Link>
        </div>
        <div className='lists'>
        <ul>
            <li><Link to="Gallery">Gallery</Link></li>
            {/* <li><Link to="Offers">Offers</Link></li> */}
            <li><Link to="Membership">Membership</Link></li>
            <li><Link to="Blog">Blog</Link></li>
            <li><Link to="Registration">Registration</Link></li>
        </ul>
    
        </div>
        
        <div className='components'>

        </div>
    </div>
    </>
  )
}

export default Navbar