import { useEffect } from "react";
import { Box } from "@mui/material";
import CustomerInfoTable from "./components/CustomerInfoTable";
import useCustomersContext from "./hooks/useCustomersContext";

export default function App() {
  const { fetchCustomers } = useCustomersContext();

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return (
    <Box
      maxWidth="1024px"
      mx="auto"
      mt={14}
    >
      <CustomerInfoTable />
    </Box>
  );
}
