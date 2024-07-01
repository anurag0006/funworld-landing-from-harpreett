import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function TableComponentMain({ data }) {
    return (
      <div className="w-full h-full">
        <Typography variant="h5" className="font-[650] my-4">
          Package
        </Typography>
        <TableContainer component={Paper} className="border">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {data.map((e, id) => {
                return (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className={`${id % 2 !== 0 ? "bg-[#DCDCDC]" : ""}`}
                  >
                    <TableCell scope="row">{e.name}</TableCell>
                    <TableCell align="left">{e.name}</TableCell>
                    <TableCell align="center">{e.value}</TableCell>
                    <TableCell align="center">{e.value}</TableCell>
                    <TableCell align="right">{e.total}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Box
            className="w-[100%] flex justify-between p-3 bg-[#0B1A48] 
                                       text-white"
          >
            <Typography>Adult World - Adults</Typography>
            <Typography>$400</Typography>
          </Box>
        </TableContainer>
      </div>
    );
  };

export default TableComponentMain
