// src/ContactMe.js
import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log(contactData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 8, 
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          required
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactMe;
