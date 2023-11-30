import React from 'react'
import { Link } from 'react-router-dom'
function Wallet() {
  return (
    <div>
      <div className='kadamawe'>
      <h2>Wallet</h2>
      <div className='kadamlink'>
        <Link>
        <i class="fa-solid fa-circle-question"></i>
        <span>Help</span>
        </Link>
      </div>
      </div>

      <div className='wallet'>
        <div className='balance'>
          <h2>KSH:0.00</h2>
          <p>Balance</p>
        </div>

        <div className='withrech'>
          <div>
            <button className='withdraw'>withdraw</button>
            <button className='recharge'>recharge</button>
          </div>
        </div>
      </div>

      <div className='taskcontainer2'>
      <div className='taskcard2'>
        <div>
        <h2>KSH:0.00</h2>
        </div>
        <div className='taskbanaa'>
        <span className='taskspan2'>Total Earning</span>
        </div>
      </div>
      <div className='taskcard2'>
        <div>
        <h2>KSH:0.00</h2>
        </div>
        <div>
        <span className='taskspan2'>Today's Earnings</span>
        </div>
      </div>
      <div className='taskcard2'>
        <div>
        <h2>KSH:0.00</h2>
        </div>
        <div>
        <span className='taskspan2'>Team Bonus</span>
        </div>
      </div>
      <div className='taskcard2'>
        <div>
        <h2>0</h2>
        </div>
        <div>
        <span className='taskspan2'>Team</span>
        </div>
      </div>
      </div>

      <div>
      <div class="input1">
        <input type="text" class="firstform" placeholder="(Fill in the reward code)" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <span class="inputform2" >Recieve</span>
      </div>
      </div>

      <div className='rewards'>
        <div className='rewardheader'>
        <h2>Additional Rewards</h2>
        </div>
        <div className='share'>
          <div>
          <p>Share with your freinds and invite them to complete tasks, get more rewards</p>
          </div>
          <div className='sharebutton'>
            <button>
            <i class="fa-solid fa-circle-plus"></i>
            <span>Share</span>
            </button>
          </div>
        </div>
      
      </div>

      <div>
        <div>
          <h2>Claim progress</h2>
        </div>
      </div>


    </div>
  )
}

export default Wallet
