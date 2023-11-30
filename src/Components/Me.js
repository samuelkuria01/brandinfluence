import React from 'react'
import { useNavigate} from 'react-router-dom'
function Me() {

  const navigate = useNavigate()

  const handleButtonClick = () => {
      // You can pass data or perform any necessary logic here
      const dataToSend = { info: 'This is some information' };

      // Navigate to another page and pass data using state
      navigate('/home', { state: { data: dataToSend } });
    };
  return (
    <div>
      <h2>Personal Center</h2>

      <div className='usercontainer'>
        <div className='user'>
        <div className='userhead'>
        <i class="fa-solid fa-circle-user"></i>
        </div>
        <div className='purchaseacc'>
          <h3>KSH: 00.0</h3>
          <h3>level:LV1</h3>
          </div>
        </div>
          <div className='startaccount'>
            <p>Purchase an Account to start earning daily rewards</p>
          </div>
      </div>

      <div>
        <button className='getmoreinfo' onClick={handleButtonClick}>
        <div className='moreinfo'>
        <i class="fa-solid fa-circle-user"></i>
        <p>My Information</p>
        <div>
        <i id='arrowright' class="fa-solid fa-arrow-right"></i>        </div>
        </div>
        </button>

        <button className='getmoreinfo' onClick={handleButtonClick}>
        <div className='moreinfo'>
        <i class="fa-solid fa-circle-user"></i>
        <p>Payment Method</p>
        <div>
        <i id='arrowright' class="fa-solid fa-arrow-right"></i>        </div>
        </div>
        </button>

        <button className='getmoreinfo' onClick={handleButtonClick}>
        <div className='moreinfo'>
        <i class="fa-solid fa-circle-user"></i>
        <p>Share our link</p>
        <div>
        <i id='arrowright' class="fa-solid fa-arrow-right"></i>        </div>
        </div>
        </button>

        <button className='getmoreinfo' onClick={handleButtonClick}>
        <div className='moreinfo'>
        <i class="fa-solid fa-circle-user"></i>
        <p>About Us</p>
        <div>
        <i id='arrowright' class="fa-solid fa-arrow-right"></i>        </div>
        </div>
        </button>
       
      </div>
    
    </div>
  )
}

export default Me
