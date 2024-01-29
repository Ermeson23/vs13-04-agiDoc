import React, { useState } from 'react';
import './header.css';
import NavBar from '../navBar/NavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import logo from '../../assets/agidoclogo.webp';
import { Link } from 'react-router-dom';

interface HeaderProps { }

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
      <AppBar className="custom-header" position='fixed'>
        <Toolbar className='header-container'>
          <Link className='link-menu' to='/'>{
            <img src={logo} alt="logo da agidoc com relógio representando agilidade. a palavra agi está em cor azul e doc está em verde" className='logo-agidoc' tabIndex={1}/>}
          </Link>
          <IconButton className='custom-icon'
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <ul className="desktop-links">
            <li>
              <Link to="/" className='link-nav' tabIndex={2}>Home</Link>
            </li>
            <li>
              <Link to="/login" className='link-nav' tabIndex={3}>Login</Link>
            </li>
            <li>
              <Link to="/register" className='link-nav' tabIndex={4}>Cadastro</Link>
            </li>
          </ul>
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
