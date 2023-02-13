import React from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
import {Button,Link} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Srcset from './ImageList.tsx';
import DigitalPicture from './DigitalPicture.tsx'
  
const FunPartOfMe = () => {
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
                  <Button style={{color:"White", backgroundColor:"Black"}} >Hobby</Button>
                  <Button style={{color: 'Grey'}} onClick={()=>navigate("/FunPartOfMePet")} >Pet</Button>
                  {/* <Button style={{color: 'Grey'}}>Travel</Button> */}
                </ButtonGroup>
              </ThemeProvider>
            </Grid>
        </Grid>

      <Grid container direction="column" 
              spacing={0}
              alignItems="center"
              justifyContent="center">
      <Grid item>
          <h1 style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}> - Painting, Watercolor</h1>  
          <Srcset></Srcset>
        </Grid>
      <Grid item>
      <h1 style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}> 
        - Painting, Digital Painting 
        <Link style={{fontSize: '28px',paddingLeft:10}} onClick={event =>  window.location.href='https://opensea.io/TiaTia'} component="button"> Tia's Opensea NFT</Link>  
      </h1>
        <DigitalPicture></DigitalPicture>
      </Grid>
      </Grid>
      </div> 
      </>
  )
};
  
export default FunPartOfMe;