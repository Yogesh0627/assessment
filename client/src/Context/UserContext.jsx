/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [clients,setClients] = useState([])

  const handleUser = (user) => {
    // console.log(user);
    setUser(user);
  };
  return (
    <userContext.Provider value={{ handleUser, user }}>
      {children}
    </userContext.Provider>
  );
};
