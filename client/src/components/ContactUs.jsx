import React, { useState, useEffect } from 'react';
import {
  Paper,
  TextField,
  Typography,
  ThemeProvider,
} from '@mui/material';
import myTheme from '../theme/myTheme';

const inputFieldColor = {
  bgcolor: 'white.main',
  width: '70%',
  marginLeft: '16%',
};

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 1000);
  
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      <Paper
        style={{
          marginTop: myTheme.spacing(6),
          marginBottom: myTheme.spacing(6),
          padding: myTheme.spacing(4),
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          animation: scrolled ? 'fadeIn 1s ease-in-out' : 'none',
        }}
        sx={{ bgcolor: 'primary.main', height: 500 }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white.main', mt: 5 }}>
          Contact Us
        </Typography>
        <form
          style={{ width: '100%', marginTop: myTheme.spacing(1) }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={inputFieldColor}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="filled"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={inputFieldColor}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            variant="filled"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
            sx={inputFieldColor}
          />
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default ContactUsForm;
