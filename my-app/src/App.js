import React from "react";
import Navbars from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQues from "./Components/Questions/AddQues/AddQues";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Router>
        <Navbars />
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={localStorage.getItem("token") ? "/home" : "/Login"}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/AddQues" element={<AddQues />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer />
    </main>
  );
}

export default App;
