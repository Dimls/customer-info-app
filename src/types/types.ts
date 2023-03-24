export interface Customer {
  id: number,
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  service: Array<Service>;
}

export interface Service {
  code: string;
  description?: string;
  date: string;
  cost: string;
}

export interface CustomerRowProps {
  key: string;
  customer: Customer;
}

export interface CustomerInfoServiceDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (x: Service) => void;
}

export interface CustomersContextProps {
  updateCustomerById: (id : number, customer: Customer ) => void;
  fetchCustomers: () => void;
  customers: any;
}
