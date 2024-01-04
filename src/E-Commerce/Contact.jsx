import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="lg">
      <Navigation />
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc(100vh - 64px)' }}>
        {/* Use a Grid container to center the Paper component */}
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: '20px', backgroundColor: 'pink' }}>
            <Typography variant="h4" mb={4} sx={{ textAlign: 'center', color: '#4caf50' }}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default ContactUs;
