import React from "react";
import { useApolloClient } from "@apollo/client";

const Logout = () => {
  const client = useApolloClient();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    client.resetStore();
    alert("You have successfully logged out!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
