import React from "react";
import { ThemeProvider, CssBaseline, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import myTheme from "../theme/myTheme";
import bgImg from "../images/main-bg.avif";

const LandingPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <div style={{ 
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${bgImg}) center/cover no-repeat`, 
      }}>
        <Typography variant="h1" color="white.main" gutterBottom style={{ animation: "fadeIn 2s ease-in-out" }}>
          Phishing URL Detection
        </Typography>
        <Link to="/websiteDetection">
          <Button variant="contained" color="primary" style={{ animation: "fadeIn 2s ease-in-out", width:"200px", }} >
            Get Started
          </Button>
        </Link>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
