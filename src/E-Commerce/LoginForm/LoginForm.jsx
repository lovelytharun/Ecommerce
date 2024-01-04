import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';


const LoginForm = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '30px',
        justifyContent: 'center',
        color: '#fff',
        //background: `url(${process.env.PUBLIC_URL}/image.webp) center / cover no-repeat fixed`,
        
       
      }}
    >
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'pink', borderRadius:'40px' }}>
        <Typography variant="h4" mb={4} sx={{ color: '#4caf50' }}>
          Login
        </Typography>
        <Box component="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            required
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginBottom: 2, color: '#333' }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{ marginBottom: 2, color: 'black' }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#4caf50', color: '#fff' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Login
            </Link>
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="#" variant="body2" style={{ color: 'black' }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            Don't have an account? <Link to="/signin" style={{ color: '#4caf50' }}>Signin</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
