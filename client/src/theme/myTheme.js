import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#5583FA",
      dark: "#300000",
      light: "#593333",
    },
    secondary:{
      main:"#FFF9F7"
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
    grey: {
      main: grey[500],
    },
    success: {
      main: "#27d027",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      letterSpacing:"0.3rem"
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 620,
      textAlign:"center",
      textDecoration:'underline'
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 800,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 800,
      textAlign: "center",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 800,
      
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: 800,
      margin: "0px 10px",
    },
    subtitle1:{
     fontWeight:200
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          padding: "13px 26px",
          fontSize: "1rem",
          textAlign: "center",
          margin: "10px 5px",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#fff",
            color: "#5583FA",
          },
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
        focusRipple: false,
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            border: "1px solid white",
            color: "white",
            "&:hover": {
              transform: "scale(1.05)",
              border: "1px solid white",
            },
          },
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color: "black",
          "&:hover": {
            cursor: "pointer",
          },
          fontFamily: "Inter, sans-serif",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "250px",
          textAlign: "center",
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        borderRadius: "0px"
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          padding: "0px 20px",
          justifyContent: "space-around",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: "0px 20px",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {},
    },
    MuiCard:{
      
      styleOverrides:{
        root:{
          // border:"1px solid #333"
        }
        
      }
    }
    
  },
});

export default myTheme;
