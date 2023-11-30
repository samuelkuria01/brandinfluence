import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes,Route} from 'react-router-dom'
import Task from './Components/Task'
import Wallet from './Components/Wallet'
import Me from './Components/Me'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Packages from './Components/Packages';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div className="App">
          <Routes>
        <Route
          path="/"
          element={
            <Login
              // Pass setShowNavbar as a prop to Login component
              setShowNavbar={setShowNavbar}
            />
          }
        />
         <Route
          path="/signup"
          element={
            <Signup
              // Pass setShowNavbar as a prop to Login component
              setShowNavbar={setShowNavbar}
            />
          }
        />
          <Route
          path="/packages"
          element={
            <Packages
              // Pass setShowNavbar as a prop to Login component
              setShowNavbar={setShowNavbar}
            />
          }
        />
        <Route
          path="/home"
          element={
            <>
              {showNavbar && <Navbar />}
              <Home />
            </>
          }
        />
        <Route path="/task" element={
        
        <>
        {showNavbar && <Navbar />}
        <Task />
      </>} 
      />
        <Route path="/wallet" element={
             <>
             {showNavbar && <Navbar />}
             <Wallet />
           </>
        } />
        <Route path="/me" element={
             <>
             {showNavbar && <Navbar />}
             <Me />
           </>
        } />
      </Routes>
    </div>
  );
}

export default App;
