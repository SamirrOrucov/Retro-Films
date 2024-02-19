import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

export const UserTokenContext = createContext();

function UserTokenContextProvider({ children }) {
  const [tokenn, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );
  const [decodedToken, setDecodedToken] = useState(null);
  useEffect(() => {
    if (Cookies.get("token")) {
      const decoded = jwtDecode(tokenn);
      setDecodedToken(decoded);
    }
  }, [tokenn]);
  function addToken(value) {
    setToken(value);
    Cookies.set("token", value, { expires: 7, secure: true });
  }

  function logout() {
    setToken(null);
    setDecodedToken(null);
    Cookies.remove("token");
  }
  return (
    <UserTokenContext.Provider
      value={{ decodedToken, logout, tokenn, addToken }}
    >
      {children}
    </UserTokenContext.Provider>
  );
}

export default UserTokenContextProvider;
