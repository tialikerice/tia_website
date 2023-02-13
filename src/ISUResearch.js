import ISUResearch from './ISUResearch.png';
import React from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
  
const ISUResearchPage = () => {
  const navigate = useNavigate();
    
  return (
      <>
       <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <br></br>
      <br></br>
      <br></br>
      <div align='center'>
      <br></br>
      <br></br>
        <img style={{height: 700, width: 1000, display: 'flex',  justifyContent:'center', alignItems:'center'}} src={ISUResearch}></img>
      </div>
    </div> 
      </>
  )
};
  
export default ISUResearchPage;