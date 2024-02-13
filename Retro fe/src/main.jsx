import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import UserTokenContextProvider from "./context/UserTokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserTokenContextProvider>
      <App />
    </UserTokenContextProvider>
  </React.StrictMode>
);
