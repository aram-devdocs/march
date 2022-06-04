import { Box, CssBaseline, ThemeProvider, Grid } from "@mui/material";
import React, { useState } from "react";
import theme from "../theme";
import Details from "./Details";
// import Greetings from "./Greetings";
import Map from "./Map";
import Terminal from "./Terminal";

export default function App() {
  const [view, setView] = useState([]);
  const _state = {
    get: {
      view: view,
    },

    set: {
      view: (data) => setView(data),
    },
  };
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

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Terminal _state={_state}/>
            </Grid>
            <Grid id={"grid_map"} item xs={6}>
              <Map _state={_state} />
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
