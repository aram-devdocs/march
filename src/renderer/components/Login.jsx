import {
  Button,
  Container,
  FormControl,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [signupMode, setSignupMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [debug, setDebug] = useState("");
  const _state = props._state;

  function createUser() {
    axios
      .post("/users/signup", { username, password })
      .then((r) => {
        if (r.data.status && r.data.status == 200) setSignupMode(false);
      })
      .catch((e) => {
        // window.alert(e.data.e);
        setDebug(e.response.data.error)
      });
  }

  function loginUser() {
    // TODO - encrypt using bcrypt and pass a JWT to _state
    axios
      .post("/users/login", { username, password })
      .then((r) => {
        if (r.data.status) {
          _state.set.loggedIn(true);
        }
      })
      .catch((e) => setDebug(e.response.data.error));
  }

  function debugUser() {
    // TODO - encrypt using bcrypt and pass a JWT to _state
    axios
      .post("/users/login", { username, password })
      .then((r) => {
        if (r.data.status) {
          setDebug(r.data.message);
        }
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    console.log("log in time");
  });
  return (
    <Container>
      <Paper>
        <Input
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <Input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        {!signupMode ? (
          <Button onClick={loginUser} variant="outlined">
            Login
          </Button>
        ) : (
          <div>
            <Button onClick={createUser} variant="outlined">
              Sigup
            </Button>

            <Button
              onClick={() => {
                setSignupMode(false);
              }}
              variant="outlined"
            >
              Back
            </Button>
          </div>
        )}
      </Paper>
      {!signupMode ? (
        <Button
          onClick={() => {
            setSignupMode(true);
          }}
          variant="outlined"
        >
          New
        </Button>
      ) : (
        <></>
      )}
      <Button onClick={debugUser} variant="outlined">
        DEBUG
      </Button>
      <Typography>Login Response: {debug}</Typography>
    </Container>
  );
}
