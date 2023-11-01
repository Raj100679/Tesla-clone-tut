import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import SignUp1 from "./Pages/SignUp1";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
