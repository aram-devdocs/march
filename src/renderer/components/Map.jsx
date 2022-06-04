import React from "react";
import { useCanvas } from "../hooks/useCanvas";
import { Box } from "@mui/system";

export default function Map() {
  const [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight] =
    useCanvas();

  const handleCanvasClick = (event) => {
    // on each click get current mouse location
    const currentCoord = { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
    console.log(event);
    // add the newest mouse location to an array in state
    console.log(currentCoord);
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas = (event) => {
    setCoordinates([]);
  };

  return (
    <div>
      <Box
        component={"canvas"}
        sx={{
          backgroundColor: "cornsilk",
          border: "5px",
          borderColor: "black",
        }}
        className="canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
      <div className="button">
        <button onClick={handleClearCanvas}> CLEAR </button>
      </div>
    </div>
  );
}
