import React, { useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import {
  useNavigate,
  useLocation,
  useParams,
  useMatch,
} from "react-router-dom";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [messages, setMessages] = useState("");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("HELLo");

    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // result = await result.json();
    // console.log(result.status);
    if (result.status == 200) {
      let res = await result.json();

      setMessages(res["messages"]);
      console.log("Regsitered Successfully");

      setEmail("");
      setPassWord("");
      setUserName("");
      navigate("/");
    } else if (result.status == 400) {
      let res = await result.json();
      setMessages(res["message"]);
      setEmail("");
      setPassWord("");
      setUserName("");
    } else {
      setMessages("Something went wrong");
      setEmail("");
      setPassWord("");
      setUserName("");
    }
  };
  return (
    <>
      <Header></Header>

      <IForm>
        <SP>Step 1 of 2</SP>

        <SH1>Create Account</SH1>
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
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>
          Already a User? <a onClick={handleLoginClick}>Log In</a>
        </p>
        <h1>{messages}</h1>
      </IForm>
    </>
  );
}
const SP = styled.p`
  font-size: 12px;
  color: grey;
  font-family: "Montserrat", sans-serif;
`;
const SH1 = styled.h1`
  padding: 9px 0;

  font-family: "Montserrat", sans-serif;
`;
const IForm = styled.div`
  padding-top: 100px;
  padding-left: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export default SignUp;
