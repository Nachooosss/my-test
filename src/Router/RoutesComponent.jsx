import React from "react";
import { Routes, Route } from "react-router-dom";

//component
import Signup from "../components/Auth/Signup";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
