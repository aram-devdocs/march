import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularStatic from "./CircularLoader";
import { LinearProgress } from "@mui/material";
import { Container } from "@mui/material";
import axios from "axios";
export default function PartyList() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("/party/demo")
      .then((r) => setRows(r.data.party))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      {rows.length == 0 ? (
        <LinearProgress color="secondary" />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Level</TableCell>
                <TableCell align="right">Stats</TableCell>
                <TableCell align="right">Health</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.level}</TableCell>
                  <TableCell align="right">
                    {JSON.stringify(row.stats)}
                  </TableCell>
                  <TableCell align="right">{row.health}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
