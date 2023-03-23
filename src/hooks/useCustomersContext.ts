import { useContext } from "react";
import CustomersContext from "../context/customers";

const useCustomersContext = () => {
  return useContext(CustomersContext);
};

export default useCustomersContext;
