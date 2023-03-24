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
import useCustomersContext from "../hooks/useCustomersContext";
import CustomerInfoServiceDialog from "./CustomerInfoServiceDialog";

const CustomerInfoTableRow = ({ customer }: CustomerRowProps) => {
  const { updateCustomerById } = useCustomersContext();
  const [isCollapsibleTableOpen, setIsCollapsibleTableOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);


  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogFormSave = (service: Service) => {
    customer.service.push(service);
    updateCustomerById(customer.id, customer);
    setIsDialogOpen(false);
  };

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
            onClick={() => setIsCollapsibleTableOpen(!isCollapsibleTableOpen)}
          >
            {"Show"}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={isCollapsibleTableOpen} timeout="auto" unmountOnExit>
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
                      <TableCell>{s.description}</TableCell>
                      <TableCell align="right">{s.date}</TableCell>
                      <TableCell align="right">{s.cost}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow key={"add-service"}>
                    <TableCell>
                      <Button variant="contained" size="small" onClick={handleDialogOpen}>
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
      <CustomerInfoServiceDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onSave={handleDialogFormSave}
      />
    </React.Fragment>
  );
};

export default CustomerInfoTableRow;
