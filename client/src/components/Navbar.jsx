import {
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton
} from "@mui/material";
import myTheme from "../theme/myTheme";


  

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <AppBar>
          <Toolbar sx={{ bgcolor: "white.main" }}>
            <Typography sx={{ flexGrow: 1 }}>
              <IconButton>
               Minor Project
              </IconButton>
            </Typography>
            <Stack direction="row" spacing={10}>
                
            </Stack>
          </Toolbar>
        </AppBar>
        
      </ThemeProvider>
    </>
  );
};

export default Navbar;
