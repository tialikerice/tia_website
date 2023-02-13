import React from 'react';
import {useNavigate} from "react-router-dom"
import TransitionCycle from './title.js'
import ResponsiveAppBar from './Appbar.tsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import OppositeContentTimeline from './timeline.js'
import Divider from '@mui/material/Divider';
import Imagebackground from './timeline_background.jpg'

const MyTimeLine = () => {
  const navigate = useNavigate();
    
  return (
      <>
       <div className="App" >
        <header style={{backgroundImage: "url(" + Imagebackground + ")", backgroundSize: 'cover',
      height: '100%',
      textAlign: 'center',
      color: 'white'}}>
      <ResponsiveAppBar timeline ="bold"></ResponsiveAppBar>
    {/*   <header className="App-header">
      <p>Tianchen Wang</p>
      </header> */}
      
      <br></br>
      <br></br>
      <br></br>
      <h1>My Journey :)</h1>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      </header>
      <Grid>
{/*       <Grid >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginTop: 5
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Typography variant="h2">My Journey :)</Typography>
      </Grid> */}
      <Grid>
      <OppositeContentTimeline></OppositeContentTimeline>
      </Grid>
      </Grid>
    </div> 
    <div>
    <br></br>
      <Divider variant="middle"></Divider>
      <br></br>
      <Typography align='center' color="text.secondary">Copyright © 2023 Tianchen Wang</Typography>
      <br></br>
    </div>
      </>
  )
};
  
export default MyTimeLine;