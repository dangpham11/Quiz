import React from "react";
import Navbars from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQues from "./Components/Questions/AddQues/AddQues";
import Home from "./Components/Home/Home";
import Reigester from "./Components/Reigester/Reigester";
import Login from "./Components/Login/Login";

function App() {
  return (
    <main className="container">
      <Router>
        <Navbars />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AddQues" element={<AddQues />} />
          <Route path="/Reigester" element={<Reigester />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
