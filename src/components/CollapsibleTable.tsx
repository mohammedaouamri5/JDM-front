import { useEffect, useState } from "react";
import { FILE, iList } from "../interface.tsx"; 
import { fetchList } from "../fetch/List";
 
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from "react";
import { CheckBox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import LinearWithValueLabel from "./LinearWithValueLabel.tsx";



function RowHandler( Input:FILE ) {
  if (Input.Packets == null) {
    console.log("-1 thing it work")
    return {
      ...Input, 
      progress: 0  , 
      packetNb: -1
    }
  
  }
  const packetNb = Input.Packets.length
  let progress = 0
  Input.Packets.forEach((element) => {  progress += Number(element.done);  }) 
  
 
  
  return {
    ...Input, 
    progress: progress  , 
    packetNb: packetNb
  }
}

function Row(props: { row: ReturnType<typeof RowHandler> }) {
  // return <p>ekfjeo</p>
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
        <TableCell align="right">{row.output}</TableCell>
        <TableCell align="right"><a href={row.url} target="_blank" rel="noopener noreferrer" >{row.url}</a></TableCell>
        <TableCell align="right"><LinearWithValueLabel progress={(row.progress / row.packetNb) * 100}/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <LinearWithValueLabel progress={(row.progress / row.packetNb) * 100}/>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Start</TableCell>
                    <TableCell>Done</TableCell>
                    <TableCell align="right">End</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Packets?.map((packetRow) => (
                      <TableRow key={packetRow.end}>
                      <TableCell component="th" scope="row">{packetRow.start} </TableCell>
                      <TableCell><Checkbox checked={packetRow.done} onChange={() => {packetRow.done=!packetRow.done}}  /></TableCell>
                      <TableCell align="right">{packetRow.end}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable(props:{list:FILE[]}) {

  
  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell align="right">Output</TableCell>
            <TableCell align="right">Url</TableCell>
            <TableCell align="right">Progress</TableCell>
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




