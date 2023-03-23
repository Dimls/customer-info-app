import { useEffect } from "react";
import "./styles.css";
import CustomerInfoTable from "./components/CustomerInfoTable";
import useCustomersContext from "./hooks/useCustomersContext";

export default function App() {
  // const { fetchCustomers } = useCustomersContext();

  // useEffect(() => {
  //   fetchCustomers();
  // }, [fetchCustomers]);

  return (
    <div className="App">
      <CustomerInfoTable />
    </div>
  );
}
