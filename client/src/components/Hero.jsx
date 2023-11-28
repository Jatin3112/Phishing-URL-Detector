import React, { useState } from "react";
import {
  Card,
  ThemeProvider,
  Paper,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { styled, keyframes } from '@mui/system';
import axios from 'axios';
import myTheme from "../theme/myTheme";
import Response from "./Response";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${fadeIn} 1s ease-in-out;
  transition: opacity 0.5s ease-in-out;

`;

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Hero = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Please enter a URL");
      return;
    }

    axios.post('http://127.0.0.1:5000/predict', { url: input })
      .then(response => {
        setResponse(response.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleResetForm = () => {
    setInput("");
    setResponse(null);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Paper style={flex} sx={{ mt: 20 }}>
        <AnimatedCard
          sx={{ width: 1200, height: 400, boxShadow: 5, borderRadius: 15 }}
          style={flex}
        >
          {response ? (
            <Response response={response} onResetForm={handleResetForm} />
          ) : (
            <form action='/predict' method="POST" style={{ width: "70%" }} onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Enter URL"
                variant="outlined"
                value={input}
                onChange={handleChange}
                fullWidth
              />
              <Button type="submit">Search</Button>
            </form>
          )}
        </AnimatedCard>
      </Paper>
    </ThemeProvider>
  );
};

export default Hero;