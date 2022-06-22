import React from "react";
import { Routes, Route } from "react-router-dom";

//component
import CreateAccount from "../components/Auth/Signup";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<CreateAccount />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
