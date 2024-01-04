import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Button, TextField, Box, Container, Typography } from '@mui/material';
//import { blue } from '@mui/material/colors';

const socialButtonStyles = {
  height: 40,
  width: 200,
  padding: 1,
  borderRadius: 10,
  
  margin: '8px 0',
};

function Signin() {
  const handleSocialLogin = (provider) => {
    let socialMediaUrl;

    switch (provider) {
      case 'instagram':
        socialMediaUrl = 'https://www.instagram.com/';
        break;
      case 'twitter':
        socialMediaUrl = 'https://twitter.com/';
        break;
      case 'facebook':
        socialMediaUrl = 'https://www.facebook.com/';
        break;
      default:
        socialMediaUrl = '/';
    }
    window.location.href = socialMediaUrl;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submit Successfully');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          backgroundColor: '#f0f0f0', // Light gray background
          padding: '16px',
          borderRadius: '40px',
          boxShadow: '0px 0px 10px 0px #000000', // Box shadow
        }}
      >
        <Typography component="h2" variant="h5" sx={{ marginBottom: '16px', textDecoration: 'underline', fontStyle: 'italic' }}>
          Sign in
        </Typography>
        <Box component="form" id="signupForm" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField label="Name" type="text" required fullWidth sx={{ marginBottom: '8px' }} />
          <TextField label="Email Id" type="email" required fullWidth sx={{ marginBottom: '8px' }} />
          <TextField label="Password" type="password" required fullWidth sx={{ marginBottom: '8px' }} />
          <TextField label="Confirm Password" type="password" required fullWidth sx={{ marginBottom: '16px' }} />
          <Button type="submit" fullWidth variant="contained" sx={{ marginBottom: '16px' }}>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Submit
            </Link>
          </Button>
          <center><Typography component="div" variant="h6" sx={{ marginBottom: '16px', textDecoration: 'underline' }}>
            OR
          </Typography></center>
          <Box>
           <center> <Button
              type="button"
              className="ins"
              onClick={() => handleSocialLogin('instagram')}
              sx={{ ...socialButtonStyles }}
            >
              <FaInstagram size={30} />
            </Button></center>
            <center><Button
              type="button"
              className="ins"
              onClick={() => handleSocialLogin('twitter')}
              sx={{ ...socialButtonStyles }}
            >
              <FaTwitter size={30} />
            </Button></center>
           <center> <Button
              type="button"
              className="ins"
              onClick={() => handleSocialLogin('facebook')}
              sx={{ ...socialButtonStyles }}
            >
              <FaFacebook size={30} />
            </Button></center>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Signin;
