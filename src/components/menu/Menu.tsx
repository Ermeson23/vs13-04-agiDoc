import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/agidoclogo.png';
import NavBar from '../navBar/NavBar';


export default function ButtonAppBar() {
  const [navBarVisible, setNavBarVisible] = useState(false);

  const handleMenuClick = () => {
    setNavBarVisible(!navBarVisible);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='custom-appbar'>
        <Toolbar className='custom-toolbar'>
          <img src={logo} alt="Logo" style={{ height: '2.5rem', marginRight: '0.625rem' }} />
          <IconButton
            className='custom-iconbutton'
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          {navBarVisible && <NavBar />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}




