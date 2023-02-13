import React from 'react';
import {useNavigate} from "react-router-dom"
import TransitionCycle from './title.js'
import ResponsiveAppBar from './Appbar.tsx';
import Imagebackground from './home_background.jpg'
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>

       <div className="App"  >
      <ResponsiveAppBar profile="underline"></ResponsiveAppBar>
      <header className="App-header" style={{backgroundImage: "url(" + Imagebackground + ")", backgroundSize: 'cover',
      height: '100%',
      textAlign: 'center',
      color: 'white'}}>
      <TransitionCycle></TransitionCycle>
      </header>
    </div> 
      </>
  )
};
  
export default Home;