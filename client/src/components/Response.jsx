import { ThemeProvider, Typography, Button } from "@mui/material";
import React from "react";
import myTheme from "../theme/myTheme";

const Response = ({ response, onResetForm }) => {
  let message;
  let color;

  if (response === "good") {
    message = "This is not a Phishing URL";
    color = "primary.main";
  } else if (response === "phishing") {
    message = "This is a Phishing URL";
    color = "error.main";
  } 

  return (
    <ThemeProvider theme={myTheme}>
      <div className="fade-in-container" style={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom color={color} style={{ animation: "fadeIn 2s ease-in-out" }}>
          {message}
        </Typography>
        <Button  color="primary" onClick={onResetForm}>
          Try Another URL
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Response;
