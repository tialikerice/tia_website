import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
/* import Tooltip from '@mui/material/Tooltip'; */
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import ProfileImage from './profileimage.png'

function ResponsiveAppBar(props) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
/*   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null); */

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
/*   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
 */
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

/*   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <AppBar elevation= {0} position="fixed" style={{ color: 'black',position: 'fixed', top: 0, backgroundColor: scrolling ? '#FFFFFF' : 'transparent' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} alt="Tia" src={ProfileImage} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tia Wang
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
{/*               {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem key= 'ProfPartOfMeEducation' onClick={()=>navigate("/ProfPartOfMeEducation")}>
                  <Typography textAlign="center" > Profile </Typography>
                </MenuItem>
              <MenuItem key='worksample' onClick={()=>navigate("/worksample")}>
                  <Typography textAlign="center">Work Sample</Typography>
                </MenuItem>
              <MenuItem key= 'mytimeline' onClick={()=>navigate("/mytimeline")}>
                  <Typography textAlign="center"> Work & Academic Journey</Typography>
                </MenuItem>
              <MenuItem key= 'funpartofme' onClick={()=>navigate("/funpartofme")}>
                  <Typography textAlign="center"> Fun Part Of Me :)</Typography>
              </MenuItem>
              <MenuItem key='About' onClick={()=>navigate("/about")}>
                  <Typography textAlign="center">Contact Me</Typography>
                </MenuItem>
              {/* <MenuItem key= 'Profile'><Typography textAlign="center">Profile</Typography></MenuItem> */}
            </Menu>
          </Box>
          <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} alt="Tia" src={ProfileImage} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tia Wang
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         {/*    {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button key= 'ProfPartOfMeEducation' 
              onClick={()=>navigate("/ProfPartOfMeEducation")}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: props.profile}}> Profile </Button>
            <Button key= 'worksample'
              onClick={()=>navigate("/worksample")}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: props.worksample}}>Work Sample </Button>
              <Button key= 'mytimeline' 
              onClick={()=>navigate("/mytimeline")}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: props.timeline}}>Work & Academic Journey</Button>
              <Button key= 'funpartofme' 
              onClick={()=>navigate("/funpartofme")}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: props.fun }}>Fun Part Of Me :)</Button>
              <Button key= 'About'
              onClick={()=>navigate("/about")}
              sx={{ my: 2, color: 'black', display: 'block', fontWeight: props.contact }}> Contact Me </Button>
          </Box>
          

{/*           <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                <Avatar alt="Tia" src={ProfileImage} />
                <Typography marginLeft={1} style={{ color: 'black' }}> Tia Wang </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))
              <MenuItem key= 'ProfPartOfMeEducation' onClick={()=>navigate("/ProfPartOfMeEducation")}>
                  <Typography textAlign="center"> Profile </Typography>
                </MenuItem>
              <MenuItem key= 'mytimeline' onClick={()=>navigate("/mytimeline")}>
                  <Typography textAlign="center"> Work & Academic Journey</Typography>
                </MenuItem>
              <MenuItem key= 'funpartofme' onClick={()=>navigate("/funpartofme")}>
                  <Typography textAlign="center"> Fun Part Of Me :)</Typography>
                </MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
