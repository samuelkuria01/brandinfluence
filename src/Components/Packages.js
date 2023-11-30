import React from 'react'
import { Link} from 'react-router-dom'
function Packages() {
  return (
    <div className='packagecontainer'>
        <div className='packagearrow'>
            <div >
                <Link to='/task'>
                <i class="fa-solid fa-circle-arrow-left"></i>      
                          </Link>
            </div>
            <h2>Packages</h2>
        </div>
      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 57</h2>
            <p>price: KSH 1200.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV2</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>

      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 235</h2>
            <p>price: KSH 5000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV3</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>

      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 300</h2>
            <p>price: KSH 8000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV4</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>

      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 820</h2>
            <p>price: KSH 15000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV5</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>

      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 1620</h2>
            <p>price: KSH 30000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>LV5</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>

      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 1890</h2>
            <p>price: KSH 35000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>VIP1</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>       
              </div>
        </div>
      </div>
      <div className='packagebagcont'>
        <div className='packagebag'>
        <div className='dailyincome'>
            <h2>Daily Income: KSH 3000</h2>
            <p>price: KSH 55000.00</p>
        </div>
        <div>
            <img className='myleveldaily' alt='mambombaya' src='../Images/Shroders.png'></img>
        </div>
        </div>
        <div className='updatelevel'>
            <div className='effectivetime'>
                <p>VIP2</p>
                <p>effective time:200</p>
            </div>
            <div>
                <button className='destiny'>
                <p>Join now</p>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
