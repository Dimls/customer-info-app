import React from "react";
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";
import { CustomerRowProps, Service } from "../types/types";

const CustomerInfoTableRow = ({ customer, onOpen }: CustomerRowProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {customer.firstName + " " + customer.lastName}
        </TableCell>
        <TableCell align="right">{customer.year}</TableCell>
        <TableCell align="right">{customer.make}</TableCell>
        <TableCell align="right">{customer.model}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {"Show"}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} bgcolor={"lightgrey"}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customer.service.map((s: Service, i: number) => (
                    <TableRow key={`${s.date}-${i}`}>
                      <TableCell>{s.code}</TableCell>
                      <TableCell>{s.desc}</TableCell>
                      <TableCell align="right">{s.date}</TableCell>
                      <TableCell align="right">{s.cost}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"add-service"}>
                    <TableCell>
                      <Button variant="contained" size="small" onClick={onOpen}>
                        {"Add service"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default CustomerInfoTableRow;
