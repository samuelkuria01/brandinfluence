import React from 'react'

function Packages() {
  return (
    <div className='packagecontainer'>
      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 57</h2>
            <p>price: KSH 1200.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/brandinfl.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV4</p>
                <p>effective time:200</p>
            </div>
            <div>
                <p>Join now</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
