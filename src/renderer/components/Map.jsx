import React, { useEffect, useState } from "react";
// import { useCanvas } from "../hooks/useCanvas";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

export default function Map() {
  // Call in useEffect to draw page
  function drawCanvas(id) {
    const array2D = [
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
      [
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
        "R",
        "Y",
      ],
    ];

    const canvas = document.getElementById(id);

    canvas.width = 640; // 20 cells
    canvas.height = 320; // 20 cells
    const cellSide = 32;

    var ctx = canvas.getContext("2d");

    for (let i = 0; i < array2D.length; i++) {
      for (let j = 0; j < array2D[i].length; j++) {
        let x = j * cellSide;
        let y = i * cellSide;

        let cellColor = "#e74c3c";

        if (array2D[i][j] === "Y") cellColor = "#f1c40f";

        ctx.beginPath();
        ctx.fillStyle = cellColor;
        ctx.fillRect(x, y, cellSide, cellSide);
      }
    }
  }

  useEffect(() => {
    drawCanvas("grid");
  });

  return (
    <Container
      // sx={}
      id={"map_container"}
    >
      <Box
        // sx={}s
        component={"canvas"}
        id={"grid"}
      />
    </Container>
  );
}
