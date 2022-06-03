import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Input } from "@mui/material";
export default function Terminal() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalContents, setTerminalContents] = useState([]);

  function onChange(e) {
    const val = e.target.value;
    setTerminalInput(val);
  }

  function keyPress(e) {
    if (e.keyCode == 13) {
      //   console.log(terminalInput);
      const newLine = <Typography sx={{color: "black"}} key={terminalContents.length + "terminal_line_id"}>{terminalInput}</Typography>;
      setTerminalContents([newLine, ...terminalContents]);
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
          flexDirection: "column-reverse"
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
