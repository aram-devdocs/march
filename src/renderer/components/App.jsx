import {
  Box,
  CssBaseline,
  ThemeProvider,
  Grid,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../theme";
import Details from "./Details";
// import Greetings from "./Greetings";
import Map from "./Map";
import Terminal from "./Terminal";
import axios from "axios";
import Login from "./Login";
import Header from "./Header";

export default function App() {
  if (process.env.NODE_ENV === "development")
    axios.defaults.baseURL = "http://localhost:3005"; // MOVE TO PROCESS

  const [view, setView] = useState([]);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") || false
  );

  // Global _state handler
  const _state = {
    get: {
      view: view,
    },

    set: {
      view: (data) => setView(data),
    },

    switch: {
      loggedIn: () => {
        localStorage.setItem("loggedIn", !loggedIn);

        setLoggedIn(!loggedIn);
      },
    },
  };

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3005/test", {
  //       username: "test",
  //       password: "password",
  //     })
  //     .then((r) => console.log(r.data))
  //     .catch((e) => console.log(e));
  // }, []);
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
          {/* DEBUG */}
          {!loggedIn ? (
            <Login _state={_state} />
          ) : (
            <Container>
              <Header _state={_state} />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Terminal _state={_state} />
                </Grid>
                <Grid id={"grid_map"} item xs={6}>
                  <Map _state={_state} />
                </Grid>
                <Grid item xs={12}>
                  <Details />
                </Grid>
              </Grid>
            </Container>
          )}
        </main>
      </Box>
    </ThemeProvider>
  );
}
