import { createContext, ReactNode, useCallback, useState } from "react";
import { CustomersContextProps } from "../types/types";
import axios from "axios";

const CustomersContext = createContext<CustomersContextProps>(
  {} as CustomersContextProps
);

const Provider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState([]);

  const addService = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3001/customers/${customers}/services`
    );

    setCustomers(response.data);
  }, [customers]);

  const fetchCustomers = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/customers");

    setCustomers(response.data);
  }, []);

  return (
    <CustomersContext.Provider
      value={{ customers, fetchCustomers, addService }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export { Provider };

export default CustomersContext;
