import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3B4E', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/*<Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Your Logo/Brand
  </Typography>*/}
          <Box>
            <Button color="inherit" component={Link} to="/" sx={{ mx: 40, fontSize: '1rem' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login" sx={{ mx: 1, fontSize: '1rem' }}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/cart" sx={{ mx: 1, fontSize: '1rem' }}>
              Cart
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ mx: 1, fontSize: '1rem' }}>
              Contact
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signin"
              variant="contained"
              sx={{
                mx: 1,
                fontSize: '1rem',
                backgroundColor: '#FFD700',
                '&:hover': { backgroundColor: '#FFD700' },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
