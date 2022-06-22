import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
        <div className="page-signup">
          <div className="grid-container container-signup" style={{justifyContent:"center"}}>
            <div className="title-span">Create Account(only this)</div>
            <NavLink to="/">
              <button className="btn-back2">Back</button>
            </NavLink>
          </div>
        </div>
    </>
  );
};

export default Signup;
