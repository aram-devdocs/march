import { Box, CssBaseline, ThemeProvider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../theme";
import Details from "./Details";
import Map from "./Map";
import Terminal from "./Terminal";
import axios from "axios";
import Login from "./Login";
import Header from "./Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HandymanIcon from "@mui/icons-material/Handyman";
export default function App() {
  // Handle Axios Settings
  axios.defaults.baseURL = "http://localhost:3005"; // PROD: MOVE TO PROCESS

  if (process.env.NODE_ENV === "development")
    axios.defaults.baseURL = "http://localhost:3005"; // MOVE TO PROCESS

  // Set App States
  const [tabIndex, setTabIndex] = useState(0);

  // Set _state States
  const [view, setView] = useState([]);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || null
  );

  // Global _state handler
  const _state = {
    get: {
      view: view,
    },

    set: {
      view: (data) => setView(data),
      loggedIn: (data) => {
        localStorage.setItem("loggedIn", data);

        setLoggedIn(data);
      },
    },

    switch: {},
  };

  useEffect(() => {
    console.log(loggedIn);
  }, []);

  // Helpers
  function onTabChange(event, newValue) {
    setTabIndex(newValue);
  }
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
          {!loggedIn ? (
            <Login _state={_state} />
          ) : (
            <Box>
              <Header _state={_state} />
              <br />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Terminal _state={_state} />
                </Grid>
                <Grid id={"grid_map"} item xs={6}>
                  <Map _state={_state} />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={tabIndex}
                        onChange={onTabChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label={<PeopleIcon />} />
                        <Tab label={<BusinessCenterIcon />} />
                        <Tab label={<HandymanIcon />} />
                      </Tabs>
                    </Box>

                    <TabPanel value={tabIndex} index={0}>
                      <Details />
                    </TabPanel>
                    <TabPanel value={tabIndex} index={1}>
                      Inventory TBD
                    </TabPanel>
                    <TabPanel value={tabIndex} index={2}>
                      Building TBD
                    </TabPanel>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </main>
      </Box>
    </ThemeProvider>
  );
}
