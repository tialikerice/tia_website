import React from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
import profileimage from './profileimage.png';
import {Grid, Typography, ButtonGroup, Button, Divider} from '@mui/material'
import WorkTimeLine from './WorkTimeLine.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    black: {
      main: '#000000',
    },
    grey: {
      main: '#D3D3D3',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 3,
  }, 
});



const ProfPartOfMeWork = () => {
  const navigate = useNavigate();
    
  return (
      <>
       <div className="App">
      <ResponsiveAppBar profile="bold"></ResponsiveAppBar>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <h1> Professional Part of Tia</h1>
    <Grid container spacing={3} wrap='nowrap' sx={{ overflow: "auto" }} style={{justify:"flex-end"}}>
        <Grid item style={{marginTop: 20 , marginLeft: '10%', magrinRight:'10%'}}>
        <img style={{width: '200px', height: '200px', display: 'flex',  justifyContent:'left', alignItems:'left'}} src={profileimage}></img>
        <br></br> 
        <Button variant="outlined" color= "inherit" sx={{ my: 2, color: 'black', display: 'block' }} style={{width: '200px'}}>Download Resume</Button> 
        </Grid>
        <Grid item style={{paddingRight:'10%'}}>
        <br></br>
        <Grid item>
        <ThemeProvider theme={theme}>
        <ButtonGroup variant="text" aria-label="text button group" color= "black" style={{
    display: 'flex',  justifyContent:'left', alignItems:'left', color:"Grey"}}>
            <Button style={{color: 'Grey'}} onClick={()=>navigate("/ProfPartOfMeEducation")}>Education</Button>
            <Button style={{color:"White", backgroundColor:"Black"}}>Work</Button>
            <Button style={{color: 'Grey'}} onClick={()=>navigate("/ProfPartOfMeResearch")}>Research and Teaching</Button>
        </ButtonGroup>
        </ThemeProvider>
        </Grid>
        <Grid item>
            <br></br>
            <WorkTimeLine></WorkTimeLine>
        </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
      </>
  )
};
  
export default ProfPartOfMeWork;