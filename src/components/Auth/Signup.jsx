import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div
        className="grid-container signup"
        id="signup"
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid-item container-signup">
          <div>
            <div className="title-span">Signup(only this)</div>;
            <NavLink to="/">
              <button className="btn-fn">Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
