import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
import { ListItem, List, ListItemButton, ListItemText } from "@mui/material";
import { Tooltip } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
const term_sx = { color: "black" };
export default function Terminal(props) {
  const [key, setKey] = useState(0);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalContents, setTerminalContents] = useState([]);

  const _state = props._state;

  function onChange(e) {
    const val = e.target.value;
    setTerminalInput(val);
  }

  function checkCommand() {
    let termMsg = null;

    switch (terminalInput) {
      case "clear":
        setTerminalContents([]);
        break;
      case "help":
        termMsg = [
          <List key={"terminal_" + key}>
            <ListItem disablePadding>
              <Tooltip title="Remove all history from terminal">
                <ListItemText primary="Clear" />
              </Tooltip>
            </ListItem>
            <ListItem disablePadding>
              <Tooltip title="Show list of commands">
                <ListItemText primary="Help" />
              </Tooltip>
            </ListItem>
          </List>,
        ];
        break;

      default:
        termMsg = [
          <Typography sx={term_sx} key={"terminal_" + key}>
            <ArrowBack fontSize="small" />
            {terminalInput}: NOT A COMMAND
          </Typography>,
        ];
        break;
    }

    if (termMsg) setKey(key + termMsg.length);

    console.log(termMsg);
    return termMsg;
  }

  function keyPress(e) {
    if (e.keyCode == 13) {
      const newLine = (
        <Typography
          sx={term_sx}
          key={terminalContents.length + "terminal_line_id"}
        >
          <ArrowForward fontSize="small" /> {terminalInput}
        </Typography>
      );
      const termMsg = checkCommand(terminalInput);
      setTerminalContents([...termMsg, newLine, ...terminalContents]);
      setTerminalInput("");

      // put the login here
    }
  }
  return (
    <Container>
      <Box
        sx={{
          border: "2px solid black",
          float: "left",
          margin: "auto    ",
          height: "300px",
          width: "100%",
          overflow: "auto",
          backgroundColor: "white",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {terminalContents}
      </Box>
      <Input
        autoFocus
        sx={{
          backgroundColor: "white",
          boxSizing: "border-box",
          border: "1px solid rgb(0, 0, 0)",
          height: "30px",
          width: "100%",
          position: "relative",
        }}
        type="text"
        onChange={onChange}
        onKeyDown={keyPress}
        value={terminalInput}
      />
    </Container>
  );
}
