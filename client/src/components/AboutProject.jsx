import React from 'react';
import { Card, Container, List, ListItem, ListItemText, Paper, Stack, Typography, ThemeProvider, styled } from '@mui/material';
import myTheme from '../theme/myTheme';

const StyledPaper = styled(Paper)({
  marginTop: myTheme.spacing(10),
  marginBottom: myTheme.spacing(6),
});

const StyledCard = styled(Card)({
  width: 250,
  height: 200,
  margin: myTheme.spacing(2),
  boxShadow: myTheme.shadows[2],
});

const SectionTitle = styled(Typography)({
  color: myTheme.palette.primary.main,
  marginTop: myTheme.spacing(4),
});

const IntroductionText = styled(Typography)({
  marginBottom: myTheme.spacing(2),
});

const AboutProject = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <StyledPaper elevation={0}>
          <SectionTitle variant="h2">About Project</SectionTitle>

          <IntroductionText variant="h5" gutterBottom>
            Introduction:
          </IntroductionText>
          <Typography>
            Welcome to our innovative minor project that focuses on enhancing online security through the integration of a robust Phishing Website Detection Model within a MERN (MongoDB, Express.js, React, Node.js) architecture. In an era where online threats are becoming increasingly sophisticated, our project aims to provide users with an additional layer of protection against phishing attacks.
          </Typography>

          <SectionTitle variant="h5" gutterBottom>
            Project Overview:
          </SectionTitle>
          <Typography variant="h6" gutterBottom>
            Phishing Website Detection Model:
          </Typography>
          <Typography>
            Our project incorporates a machine learning-based Phishing Website Detection Model that utilizes advanced algorithms to analyze the characteristics of websites and determine their authenticity. By leveraging features such as URL structure, SSL certificates, and content analysis, the model can identify potential phishing websites with a high level of accuracy.
          </Typography>
          <Typography variant="h6" gutterBottom>
            MERN Integration:
          </Typography>
          <Typography>
            The MERN stack is a powerful combination of technologies that enables the development of robust and scalable web applications. In our project, we have seamlessly integrated the Phishing Website Detection Model into the MERN architecture. This integration allows users to access the detection capabilities directly from a user-friendly web interface, providing a convenient and secure browsing experience.
          </Typography>

          <SectionTitle variant="h6" gutterBottom>
            Key Features:
          </SectionTitle>
          <List>
            <ListItem>
              <ListItemText primary="Real-time Phishing Detection: The model continuously monitors websites in real-time, instantly flagging any potential phishing threats." />
            </ListItem>
            <ListItem>
              <ListItemText primary="User-Friendly Interface: The MERN-based website provides an intuitive and easy-to-navigate interface, allowing users to interact with the detection model effortlessly." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Detailed Reports: Users can access detailed reports on the analysis of websites, gaining insights into the characteristics that led to the classification as phishing or legitimate." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Scalability: The MERN stack ensures scalability, allowing our solution to accommodate a growing number of users and an ever-expanding database of phishing patterns." />
            </ListItem>
          </List>

          <SectionTitle variant="h6" gutterBottom>
            Project Benefits:
          </SectionTitle>
          <List>
            <ListItem>
              <ListItemText primary="Enhanced Security: Users can browse the internet with increased confidence, knowing that our Phishing Website Detection Model is actively safeguarding them from potential threats." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Educational Component: The detailed reports generated by the system provide users with valuable information about the characteristics of phishing websites, contributing to cybersecurity awareness." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Seamless Integration: The integration within the MERN stack ensures a smooth and responsive user experience, making the protection against phishing attacks easily accessible." />
            </ListItem>
          </List>

          {/* <Stack direction="row" justifyContent="center" mt={6}>
            {[1, 2, 3, 4].map((index) => (
              <StyledCard key={index}>
                
              </StyledCard>
            ))}
          </Stack> */}
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default AboutProject;
