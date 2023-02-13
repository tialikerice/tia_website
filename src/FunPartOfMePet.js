import React from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hamster from './hamster.JPG'
import { Typography } from '@mui/material';
  
const FunPartOfMePet = () => {
  const navigate = useNavigate();
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
    
  return (
      <>
      <div className="App">
        <ResponsiveAppBar fun = "bold"></ResponsiveAppBar>
        <br></br>
        <br></br>
        <br></br>
        <h1> Fun Part of Tia</h1>
        <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
          <Grid item>
            <ThemeProvider theme={theme}>
                  <ButtonGroup variant="text" aria-label="text button group" color= "black" style={{
              display: 'flex',  justifyContent:'left', alignItems:'left', color:"Grey"}}>
                      <Button style={{color: 'Grey'}} onClick={()=>navigate("/FunPartOfMe")}>Hobby</Button>
                      <Button style={{color:"White", backgroundColor:"Black"}}>Pet</Button>
                      {/* <Button style={{color: 'Grey'}}>Travel</Button> */}
                  </ButtonGroup>
            </ThemeProvider>
          </Grid>
        </Grid>
        <br></br>
        <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
                <Grid item>
                  <img src={Hamster} style={{height: 300, width: 250}}></img>
                  <Typography> Name: Hamster | Gender: Female</Typography>
                  <Typography> Birthday: May 2020 | Status: In Paradise</Typography>
                </Grid>
          </Grid>
      </div> 
      </>
  )
};
  
export default FunPartOfMePet;