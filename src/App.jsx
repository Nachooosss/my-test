import React from "react";

// components
import Navbar from "./components/Section/Navbar";
import MainBoard from "./components/Section/MainBoard";
import Categories from "./components/Section/Categories";
import "./Styles/Responsive.css";
import Autentication from "./components/Auth/Autentication";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./Router/RoutesComponent";

const App = () => {
  return (
    <>
      <Router>
      <React.Fragment>
      <RoutesComponent></RoutesComponent>
      <section>
        <Autentication></Autentication>
      </section>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        <MainBoard></MainBoard>
      </section>
      <section>
        <Categories></Categories>
      </section>
      </React.Fragment>
      </Router>
    </>
  );
};

export default App;
