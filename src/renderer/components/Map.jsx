import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Button, Container } from "@mui/material";

export default function Map(props) {
  const _state = props._state;
  // Call in useEffect to draw page
  function drawCanvas(id) {
    const canvas = document.getElementById(id);

    canvas.width = 640; // 20 cells
    canvas.height = 320; // 20 cells
    const cellSide = 32;

    var ctx = canvas.getContext("2d");

    const view = _state.get.view;

    for (let i = 0; i < view.length; i++) {
      for (let j = 0; j < view[i].length; j++) {
        let x = j * cellSide;
        let y = i * cellSide;

        // let cellColor = "#e74c3c";

        // if (view[i][j] === "Y") cellColor = "#f1c40f";

        ctx.beginPath();
        // ctx.fillStyle = cellColor;
        // ctx.fillRect(x, y, cellSide, cellSide);
        const image = new Image();

        switch (view[i][j]) {
          case 0:
            image.src = "/assets/dirt.png";
            ctx.drawImage(image, x, y, cellSide, cellSide);
            break;

          default:
            image.src = "/assets/dirt.png";
            ctx.drawImage(image, x, y, cellSide, cellSide);

            break;
        }
      }
    }
  }

  function drawDemo() {
    axios
      .get("/maps/demo")
      .then((r) => {
        if (r.data.status) {
          _state.set.view(r.data.map);
        }
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    drawCanvas("grid");
  });

  return (
    <Container
      // sx={}
      id={"map_container"}
    >
      <Box sx={{ borderStyle: "solid" }} component={"canvas"} id={"grid"} />

      <Button onClick={drawDemo}>Draw Demo</Button>
      <Button onClick={() => _state.set.view([])}>Clear</Button>
    </Container>
  );
}
