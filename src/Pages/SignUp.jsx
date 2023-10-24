import React, { useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [messages,setMessages]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HELLo");
    
    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.status==200) {
      setMessages(result["messages"]);
      console.log("Regsitered Successfully");
      setEmail("");
      setPassWord("");
      setUserName("");
    } else {
      setMessages(result["message"]);
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
        <h1>{messages}</h1>
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
