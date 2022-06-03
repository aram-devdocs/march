import { Box, CssBaseline, ThemeProvider, Grid } from "@mui/material";
import React from "react";
import theme from "../theme";
import Details from "./Details";
// import Greetings from "./Greetings";
import Map from "./Map";
import Terminal from "./Terminal";

export default function App() {
  return (
    // Setup theme and css baseline for the Material-UI app
    // https://mui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <main>
          {/* This is where your app content should go */}
          {/* <Greetings /> */}

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Terminal />
            </Grid>
            <Grid item xs={6}>
              <Map />
            </Grid>
            <Grid item xs={12}>
              <Details />
            </Grid>
          </Grid>
        </main>
      </Box>
    </ThemeProvider>
  );
}
