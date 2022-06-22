import React from "react";

export function open_login() {
  var posicion;
  posicion = document.getElementById("part2-login").style.width;
  if (posicion !== "0%") {
    document.getElementById("part2-login").style.width = "0%";
  } else {
    document.getElementById("part2-login").style.width = "50%";
  }
  var posicion2;
  posicion2 = document.getElementById("part1-login").style.width;
  if (posicion2 !== "0%") {
    document.getElementById("part1-login").style.width = "0%";
  } else {
    document.getElementById("part1-login").style.width = "50%";
  }
  var hide;
  hide = document.getElementById("hide-user-text").style.visibility;
  if (hide === "hidden") {
    document.getElementById("hide-user-text").style.visibility = "visible";
  } else {
    document.getElementById("hide-user-text").style.visibility = "hidden";
  }
}
const Autentication = () => {
  return (
    <>
      <div className="part1-login" id="part1-login">
        <br />
        <h3 className="text-input-login1" id="hide-user-text">
          Username
        </h3>
        <input type="text" id="data-login" className="data-login input-user" />
        <br />
        <button className="btn-login">Login</button>
      </div>
      <div className="part2-login" id="part2-login">
        <span className="title-span title-login">Gamor</span>

        <br />
        <h3 className="text-input-login2">Password</h3>
        <input
          type="password"
          id="data-login input-password"
          className="data-login"
        />
        <br />
        <button className="btn-back" onClick={open_login}>
          Back
        </button>
      </div>
    </>
  );
};

export default Autentication;
