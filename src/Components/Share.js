import React from 'react'
import { Link } from 'react-router-dom'
function Share() {
  return (
    <div>
         <div >
                <Link to='/task'>
                <i class="fa-solid fa-circle-arrow-left"></i>      
                          </Link>
            </div>
      <h2>Share Our Code to get bonuses</h2>
      <div>
      <div className='packagearrow'>
           
            <p>shroders.netlify.app</p>
        </div>
       
      </div>
    </div>
  )
}

export default Share
