import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
import ResponsiveAppBar from './Appbar.tsx';

const Profile = () => {
  const navigate = useNavigate();
    
  return (
      <>
       <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <header className="App-header">
      <Button variant="contained">Download My Resume</Button>
      </header>
    </div> 
      </>
  )
};
  
export default Profile;