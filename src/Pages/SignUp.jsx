import React, { useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import {
  useNavigate,
  useLocation,
  useParams,
  useMatch,
} from "react-router-dom";
import Region from "../SmallComponents/Region";
import LanguageDropdown from "../SmallComponents/LanguageDropdown";
import SignUp1 from "./SignUp1";

function SignUp() {
  
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
      <SignUp1/>
    </>
  );
}

export default SignUp;
