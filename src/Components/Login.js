import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
function Login() {
    const [useremail, setUserEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if both username and password are present
        if (username && password) {
          // Perform login logic here
          // For simplicity, let's assume successful login if username and password are not empty
    
          // If you have more complex authentication logic, replace the condition above
          // with your actual authentication check
    
          // Assuming login is successful, you can navigate to the home page
          navigate('/signup');
    
          // If you want to hide the Navbar after login, you can call setShowNavbar(false)
    
          // Optionally, display a welcome message
          alert('Account Created Successful');
        } else {
          // If either username or password is missing, display an error message
          setError('Username and password are required');
        }
    }
  return (
    <div className='mightycrown'>
      <form>
        <div className='formheader'>
            <div>
                <img className='yakwanza2' src='../Images/Shroders.png'alt='brand'></img>
            </div>
        </div>
        <h2>Sign Up</h2>
        <input type="text"  value={useremail} onChange={(e) => setUserEmail(e.target.value)}  placeholder="Full name" required=""/>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="Email" required=""/>
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required=""/>
        <button onClick={handleLogin} class="create-account">Create New Account</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </div>
  )
}

export default Login
