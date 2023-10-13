import '../styles/Home.css';
import '../styles/tailwind.css';
import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Refer from '../Components/refer';
import StreakDisplay from '../Components/streak';
import Leaderboard from '../Components/leaderboard';
import Tasks from '../Components/Tasks';
import Navbar from '../Components/Navbar';

function Home() {
    const user = useSelector((state) => state.userState.user);
    
  return (
    <div className="blue-background" >
        {!user && <Navigate to='/' />
        /* If user not loggedIn redirect to Login Page */
        }
        
      <div style={{ margin: '0 100px' }}>
      <Navbar />
      <div className="App">
        <div className='left_section'>
           <div className='poster'>
            <div className='content'>
              <h2>30-Day of Coding in Core Java</h2>
              <p>Solve new problem everyday for the next 100 days and be Unstoppable!</p>
            </div>
            <div className='image'> 
              <img src='poster.png'></img>
            </div>
           </div>
          <div className='task'>
            <Tasks/>
          </div>
        </div>

        <div className='right_section'>
          <div className='refer'><Refer/></div>
          <div className='leaderboard'><Leaderboard/></div>
          <div className='streak'><StreakDisplay/></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
