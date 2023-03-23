import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/customers";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
