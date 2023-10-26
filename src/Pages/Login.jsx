import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useNavigate } from "react-router";
import { set } from "mongoose";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignInClick=()=>{
    navigate('/register');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    if (result.status == 200) {
      let res = await result.json();
      setError(res["message"]);
      setUserName("");
      setPassWord("");
      navigate("/");
    } else if (result.status == 400) {
      let res = await result.json();
      setError(res["message"]);
      setUserName("");
      setPassWord("");
    } else {
      setError("Something went Wrong");
      setUserName("");
      setPassWord("");
      navigate('/login');
    }
  };
  return (
    <>
      
      <Iform>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <button onClick={handleSubmit}>Log In</button>
        <p>
          Haven't Logged In? Please <a href="#" onClick={handleSignInClick}>Sign In</a>
        </p>
        <h1>{error}</h1>
      </Iform>
    </>
  );
}
const Iform = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
