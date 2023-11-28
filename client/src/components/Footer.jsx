import React from 'react';
import { Box, Container, Link, Typography, ThemeProvider } from '@mui/material';
import myTheme from '../theme/myTheme';

const Footer = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Box
        component="footer"
        sx={{
          py: 3,
          bgcolor: 'primary.main',
          color: 'white.main',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
         
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
