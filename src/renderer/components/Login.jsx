import {
  Button,
  Container,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [debug, setDebug] = useState("");
  const _state = props._state;

  function loginUser() {
    // TODO - encrypt using bcrypt and pass a JWT to _state
    axios
      .post("/users/login", { username, password })
      .then((r) => {
        if (r.data.status) {
          _state.switch.loggedIn();
        }
      })
      .catch((e) => console.log(e));
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
  return (
    <Container>
      <Input
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={loginUser} variant="outlined">
        Login
      </Button>
      <Button onClick={debugUser} variant="outlined">
        DEBUG
      </Button>
      <Typography>Login Response: {debug}</Typography>
    </Container>
  );
}
