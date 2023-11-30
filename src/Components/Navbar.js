import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <div>
        <nav className='nav'>
            <Link to='/' className='navlink'>
            <i class="fa-solid fa-house"></i>
            <span className='navtext'>Home</span>
            </Link>

            <Link to='/task'className='navlink'>
            <i class="fa-solid fa-list-check"></i>
            <span className='navtext'>Task</span>
            </Link>

            <Link to='/wallet'className='navlink'>
            <i class="fa-solid fa-wallet"></i>
            <span className='navtext'>Wallet</span>
            </Link>

            <Link to='/me'className='navlink'>
            <i class="fa-regular fa-user"></i>
            <span className='navtext'>Me</span>
            </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
