import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { Customer } from "../types/types";
import customers from "../data/customers";
import CustomerInfoTableRow from "./CustomerInfoTableRow";
import CustomerInfoServiceDialog from "./CustomerInfoServiceDialog";

const CustomerInfoTable = () => {
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogFormSave = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Customer name</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Service</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c: Customer) => (
              <CustomerInfoTableRow
                key={c.firstName}
                customer={c}
                onOpen={handleDialogOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomerInfoServiceDialog
        open={open}
        onClose={handleDialogClose}
        onSave={handleDialogFormSave}
      />
    </>
  );
};

export default CustomerInfoTable;
