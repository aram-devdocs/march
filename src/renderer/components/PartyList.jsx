import React from "react";

import { Box, Stack, Typography } from "@mui/material";

export default function PartyList(props) {
  function PartyCard(person) {
    return (
      <Box>
        <Typography>{person.name}</Typography>
        <Typography>{person.health}</Typography>
        <Typography>{person.level}</Typography>
      </Box>
    );
  }
  return <Stack spacing={2}>{props.party.map((p) => PartyCard(p))}</Stack>;
}
