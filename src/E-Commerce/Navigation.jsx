import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logoecom1.jpg'; 
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3B4E', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={logoImage} alt="Logo" style={{ marginRight: '100px', width: '100px', height: '85px' }} />
          {<Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}></Typography>}
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                mx: 10,
                fontSize: '1rem',
                borderBottom: activeItem === 'home' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('home')}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                mx: 1,
                fontSize: '1rem',
                borderBottom: activeItem === 'login' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('login')}
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signin"
              sx={{
                mx: 1,
                fontSize: '1rem',
                borderBottom: activeItem === 'login' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('login')}
            >
              Sign Up
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/cart"
              sx={{
                mx: 1,
                fontSize: '1rem',
                borderBottom: activeItem === 'login' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('login')}
            >
              Cart
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/aboutus"
              sx={{
                mx: 1,
                fontSize: '1rem',
                borderBottom: activeItem === 'login' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('login')}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contactus"
              sx={{
                mx: 1,
                fontSize: '1rem',
                borderBottom: activeItem === 'login' && '2px solid #FFD700',
              }}
              onClick={() => handleItemClick('login')}
            >
              Contact Us
            </Button>
            {/* Add similar onClick and borderBottom styles for other navigation items */}
            {/* ... */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
