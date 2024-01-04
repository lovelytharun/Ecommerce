import React, { useState } from 'react';
import { Container, TextField, TextareaAutosize, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      console.log('Form Data:', formData);
      setSubmitted(true);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: 'gray',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: '#333', marginBottom: '2rem' }}>
        Contact Us
      </Typography>
      {submitted ? (
        <Typography variant="h6" sx={{ color: 'green', marginBottom: '2rem' }}>
          Form submitted successfully!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label="Name*"
              fullWidth
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              label="Email*"
              fullWidth
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextareaAutosize
              minRows={5}
              placeholder="Message*"
              style={{
                width: '100%',
                padding: '12px',
                resize: 'vertical',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ backgroundColor: '#fff' }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Contact;
