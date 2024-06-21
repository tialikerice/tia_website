import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';
import { Typography, IconButton, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const About = () => {
  const navigate = useNavigate();
  const noPointer = {cursor: 'default'};
  const [email, setEmail] = useState('wangtc19960516@gmail.com');
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

  const handleClick = () => {
    navigator.clipboard.writeText(email);
  };
  return (
  <>
  <div className="App">
        <ResponsiveAppBar contact= "bold"></ResponsiveAppBar>
        <br></br>
        <br></br>
        <br></br>
        <h1> Contact Me</h1>
        {/* <Typography variant="h3" align='center'>Contact Me</Typography> */}
        {/* <p align='center'>While we're good with smoke signals, there are simpler ways for us to get in touch and answer
        your questions</p> */}
        <br></br>
        <Grid justifyContent="center" sx={{ flexGrow: 1 }} justify="flex-end"
        alignItems="center" container spacing={10}>
        <Grid item>
        <IconButton tooltip="Description here" style={noPointer} onClick={event =>  window.location.href='https://www.linkedin.com/in/tianchen-wang-874306168/'}>
            <LinkedInIcon sx={{ fontSize: "150px" }} style={{noPointer, color :'#0077b5'}} ></LinkedInIcon>
        </IconButton>
        <Typography align='center'>Connect Me on LinkedIn!</Typography>
        </Grid>
        {/* <Divider marginLeft={10} orientation="vertical" variant="middle" flexItem/> */}
        <Grid item>
          <ThemeProvider theme={theme}>
        <Button color= 'black' variant="outlined" onClick={handleClick}>
          <ChevronRightIcon></ChevronRightIcon>
        <Typography sx={{ fontSize: "15px" }} style={{marginRight: 10}}> tialikework@gmail.com </Typography>
        <ContentCopyIcon></ContentCopyIcon>
    </Button>
    </ThemeProvider>

{/*         <Typography variant="h5">Leave Your Message!</Typography>
        <br></br>
        <TextField
          required
          label="Name"
          id="Name"
          placeholder="Name"
        />
        <TextField
       style={{marginLeft: '20px'}}
       align= 'right'
          required
          label="Email"
          id="Email"
          placeholder="Email"
        />
        <br></br>
        <br></br>
        <br></br>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
        <TextField
          required
          label="Message"
          id="Message"
          placeholder="Message"
          multiline
          fullWidth
          inputProps={{
            style: {
              minHeight: "50px"
            }
          }}
        />
        <br></br>
        <br></br>
        <Button variant="contained" endIcon={<SendIcon />} style={{ background: '#0077b5'}}>Send</Button>
        </Box> */}
        </Grid>
        </Grid>
        </div>
  </>
  )
};
  
export default About;
