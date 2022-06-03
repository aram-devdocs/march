import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import electronLogo from "../../../static/electron.svg";

export default function Greetings() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container justifyContent="center">
        <Box component="img" src={electronLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        March
      </Typography>
    </Container>
  );
}
