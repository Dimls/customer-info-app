import { createContext, ReactNode, useCallback, useState } from "react";
import { CustomersContextProps, Customer } from "../types/types";
import axios from "axios";

const CustomersContext = createContext<CustomersContextProps>(
  {} as CustomersContextProps
);

const Provider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[] | []>([]);

  const updateCustomerById = async (id: number, customer: Customer) => {
    const response = await axios.put(`http://localhost:3001/customers/${id}`,
      customer
    );

    const updatedCustomers = customers.map((customer: Customer) => {
      if (customer.id === id) {
        return { ...response.data }
      }
      return customer;
    })
    setCustomers(updatedCustomers);
  }

  const fetchCustomers = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/customers");

    setCustomers(response.data);
  }, []);

  return (
    <CustomersContext.Provider
      value={{ customers, fetchCustomers, updateCustomerById }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export { Provider };

export default CustomersContext;
