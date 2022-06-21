import React from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [frontuser, setFrontuser] = React.useState("");
  return (
    <AuthContext.Provider
      value={{
        frontuser,
        setFrontuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
