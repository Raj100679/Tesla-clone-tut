import React, { useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const handleSubmit = async (e) => {
    console.log("HELLo");
    e.preventDefault();
    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log("Regsitered Successfullt");
      setEmail("");
      setPassWord("");
      setUserName("");
    }
  };
  return (
    <>
      <Header></Header>
      <IForm>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </IForm>
    </>
  );
}
const IForm = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default SignUp;
