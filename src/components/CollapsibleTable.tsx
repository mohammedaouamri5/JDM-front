import { FILE, RowT, StateS } from "../interface.tsx";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import LinearWithValueLabel from "./LinearWithValueLabel.tsx";
import { MyButton } from "./MyButton.tsx";

function RowHandler(Input: FILE): RowT {
  if (Input.Packets == null) {
    console.log("-1 thing it work");
    return {
      ...Input,
      progress: -1,
      packetNb: 1,
      state: StateS.NEW(Input),
    };
  }
  const packetNb = Input.Packets.length;
  let progress = 0;
  Input.Packets.forEach((element) => {
    progress += Number(element.done);
  });

  let state = StateS.NEW(Input);

  return {
    ...Input,
    progress: progress,
    packetNb: packetNb,
    state: state,
  };
}

function Row(props: { row: RowT }) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.ID}
        </TableCell>
        <TableCell align="center">{row.output}</TableCell>
        <TableCell align="center">
          <a href={row.url} target="_blank" rel="noopener noreferrer">
            {row.url}
          </a>
        </TableCell>
        <TableCell align="center">
          <MyButton state={row.state} ID={row.ID} />
  {row.Id}  
      </TableCell>

        <TableCell align="center">
          <LinearWithValueLabel
            progress={(row.progress / row.packetNb) * 100}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <LinearWithValueLabel
                progress={(row.progress / row.packetNb) * 100}
              />
              <Typography variant="h6" gutterBottom component="div">
                Progress
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: { list: FILE[] }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id</TableCell>
              <TableCell align="center">Output</TableCell>
              <TableCell align="center">Url</TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.list.map((row) => (
              <Row key={row.ID} row={RowHandler(row)} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
