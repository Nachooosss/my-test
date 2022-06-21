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
  var posicion3;
  posicion3 = document.getElementById("login").style.marginTop;
  if (posicion3 !== "-500px") {
    document.getElementById("login").style.marginTop = "-500px";
  } else {
    document.getElementById("login").style.marginTop = "150px";
  }
}
const Autentication = () => {
  return (
    <>
      <div className="part1-login" id="part1-login"></div>
      <div className="part2-login" id="part2-login"></div>
      <div
        className="grid-container login"
        id="login"
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid-item container-login">
          <span className="title-span title-login">Gamor</span>
          <br />
          <h3 className="text-input-login">Username</h3>
          <input type="text" id="data-login" className="data-login" />
          <br />
          <h3 className="text-input-login">Password</h3>
          <input type="password" id="data-login" className="data-login" />
          <br />
          <button className="btn-login">Login</button>
          <button className="btn-login" onClick={open_login}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Autentication;
