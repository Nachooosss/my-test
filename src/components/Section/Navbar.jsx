import React from "react";
import "./../../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { open_login } from "./../Auth/Autentication";

const Navbar = () => {
  const EmptyButtons = ["Streams", "Party", "Premium"];
  const [checked, setChecked] = React.useState(
    localStorage.getItem("theme") === "light" ? true : false
  );

  React.useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "light");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "dark");
      setChecked(false);
    }
  };
  return (
    <>
      <div className="grid-container navbarItems">
        <div className="grid-item item1">
          <NavLink to="#">
            <button className="btn-home" onclick="window.location.href='#'" >
              Home
            </button>
          </NavLink>
          {EmptyButtons.map((value, index) => (
            <button key={index} className="btn">
              {value}
            </button>
          ))}
        </div>
        <div className=" grid-item item2">
          <span className="title-span">Gamor</span>
        </div>
        <div className=" grid-item item3">
          <label id="switch">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => toggleThemeChange()}
            />
            <span className="slider round"></span>
          </label>
          <button className="btn-fn" onClick={open_login}>
            Sign in
          </button>
          <NavLink to="/register">
            <button className="btn-fn account">
              <span className="text-account">Create Account</span>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
