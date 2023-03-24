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
import CustomerInfoTableRow from "./CustomerInfoTableRow";
import useCustomersContext from "../hooks/useCustomersContext";

const CustomerInfoTable = () => {
  const { customers } = useCustomersContext();

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
            {customers?.map((c: Customer) => (
              <CustomerInfoTableRow
                key={c.firstName}
                customer={c}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerInfoTable;
