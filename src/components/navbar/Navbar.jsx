import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="logo" />
        
        

         <div className='nav-2'>
            <h4><a href="#">Work</a></h4>
            <h4><a href="#">Studio</a></h4>
            <h4><a href="#">Contact</a></h4>
            
         </div>
         <h4 className='mobile'>≡ Menu</h4>
         {/* <div className="menuBar"></div> */}
    </nav>
  )
}

export default Navbar

