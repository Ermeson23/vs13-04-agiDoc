import React, { useState } from 'react';
import './header.css';
import NavBar from '../navBar/NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import logo from '../../assets/agidoclogo.png';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="custom-header" position='static'>
        <Toolbar className='header-container'>
          <img src={logo} alt="logo da agidoc com relógio representando agilidade. a palavra agi está em cor azul e doc está em verde" className='logo-agidoc' />
          <IconButton className='custom-icon'
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <NavBar />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
