export interface Service {
  code: number;
  desc: string;
  date: string;
  cost: string;
}

export interface Customer {
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  service: Array<Service>;
}

export interface CustomerRowProps {
  key: string;
  customer: Customer;
  onOpen: () => void;
}

export interface CustomerInfoServiceProps {
  code: string;
  description?: string;
  date: string;
  cost: string;
}

export interface CustomerInfoServiceDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (x: boolean) => void;
}

export interface CustomersContextProps {
  addService: () => void;
  fetchCustomers: () => void;
  customers: any;
}
