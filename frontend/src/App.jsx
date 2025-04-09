import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navbaradmin from "./components/Navbaradmin";
import Empdata from "./components/Empdata";
import Addemp from "./components/Addemp";
import Loginadmin from "./components/Loginadmin";
import Empdataadmin from "./components/Empdataadmin";
import { Route, Routes } from "react-router-dom";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/admin"} element={<Loginadmin />} />
        <Route path={"/userdata"} element={<Main1 child={<Empdata />} />} />
        <Route
          path={"/admindata"}
          element={<Main2 child={<Empdataadmin />} />}
        />
        <Route path={"/addemp"} element={<Main2 child={<Addemp />} />} />
      </Routes>
      {/* <Login /> */}
      {/* <Loginadmin /> */}
      {/* <Navbar /> */}
      {/* <Navbaradmin /> */}
      {/* <Empdata /> */}
      {/* <Empdataadmin /> */}
      {/* <Addemp /> */}
    </>
  );
}

export default App;
