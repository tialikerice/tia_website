import React from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
import Link from '@mui/material/Link';
  
const WorkSample = () => {
  const navigate = useNavigate();
    
  return (
      <>
       <div className="App">
      <ResponsiveAppBar worksample="bold"></ResponsiveAppBar>
      <br></br>
      <br></br>
      <br></br>
      <h1> Work Sample</h1>
    </div> 
    <div>
        <h2 style={{marginLeft: '10%', marginRight: '10%'}}>HTML / JavaScript / D3.js Project:</h2>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/5311HW1TianchenWang/'} component="button"> - San Francisco Street Tree Data Visualization</Link>
        <br></br>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/World_GDP_Data/'} component="button"> - 2020 World GDP Data Visualization</Link>
        <br></br>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/Crime_Business_Pattern_Investigation_Philadelphia/'} component="button"> - Crime_Business_Pattern_Investigation_Philadelphia</Link>
        <br></br>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/color_bar/'} component="button"> - Color Bar</Link>
        <br></br>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/New_York_State_Income_Map/'} component="button"> - New York State Income Distribution</Link>
        <br></br>
        <Link style={{marginLeft: '10%', marginRight: '10%' , fontSize: '16px'}} onClick={event =>  window.location.href='https://tialikerice.github.io/senate_roll_call_nodes/'} component="button"> - Senate Roll Call Nodes</Link>
        <h2 style={{marginLeft: '10%', marginRight: '10%'}}>Honor Research:</h2>
        <Link style={{ marginLeft: '10%', marginRight: '10%', fontSize: '16px'}} onClick={()=>navigate("/ISUResearchPage")} component="button"> - Independent Study: A graphical Exploration of ISU Police Crime Logs</Link>
    </div>
      </>
  )
};
  
export default WorkSample;