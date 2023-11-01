import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Region from "../SmallComponents/Region";
import LanguageDropdown from "../SmallComponents/LanguageDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';


function SignUp1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const isSubmitDisabled = !(formData.firstName && formData.lastName);
  const [changePage, setChangePage] = useState(true);
  const styleselect = {
    width: "300px",
    height: "35px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "none",
    fontSize: "12px",
    letterSpacing: ".5px",
    paddingLeft: "8px",
    color: "#5c5e62",
  };
  const buttonselect = {
    marginTop: "20px",
    width: "300px",
    height: "40px",
    backgroundColor: "#3e6ae1",
    borderRadius: "5px",
    border: "none",
    fontSize: "13px",
    color: "white",
    cursor: "pointer",
  };
  const buttondis = {
    marginTop: "20px",
    width: "300px",
    height: "40px",
    backgroundColor: "#7393B3",
    borderRadius: "5px",
    border: "none",
    fontSize: "13px",
    color: "white",
    cursor: "not-allowed",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChangePage(!changePage);
  };

  return (
    <>
      {changePage ? (
        <IForm onSubmit={handleSubmit}>
          <SP>Step 1 of 2</SP>
          <SH1>Create Account</SH1>
          <SP>Region</SP>
          <Region></Region>
          <SP>Language</SP>
          <LanguageDropdown></LanguageDropdown>
          <SP>First Name</SP>
          <input
            type="text"
            value={formData.firstName}
            style={styleselect}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <SP>Last Name</SP>
          <input
            type="text"
            value={formData.lastName}
            style={styleselect}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />

          <Spand>
            By clicking 'Next', I understand and agree to Tesla's
            <Sa href="https://www.tesla.com/en_sg/legal/privacy">
              {" "}
              Privacy Notice{" "}
            </Sa>
            and <Sa href="https://www.tesla.com/legal/terms"> Terms of Use </Sa>
            for creating a Tesla Account and I authorize Tesla to contact me for
            account management purposes via the contact information I provide. I
            understand calls or texts may use automatic or computer-assisted
            dialing or pre-recorded messages. Normal message and data rates
            apply.
          </Spand>
          <button
            type="submit"
            disabled={isSubmitDisabled}
            style={isSubmitDisabled ? buttondis : buttonselect}
          >
            Next
          </button>
        </IForm>
      ) : (
        <IForm onSubmit={handleSubmit}>
          <SP>Step 2 of 2</SP>
          <SH1>Create Account</SH1>
          <SP>Email</SP>
          <input
            type="email"
            style={styleselect}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <Sdiv>
            <SP>Password</SP>
            <FontAwesomeIcon icon={faCircleInfo}/>
          </Sdiv>
          <input
            type="password"
            style={styleselect}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />

          <SP>Confirm Password</SP>
          <input
            type="password"
            style={styleselect}
            onChange={(e) => {
              setFormData({ ...formData, confirmpassword: e.target.value });
            }}
          />
        </IForm>
      )}
    </>
  );
}
const SP = styled.p`
  font-size: 12px;
  color: grey;
  font-family: "Montserrat", sans-serif;
  padding: 10px 0;
`;
const SH1 = styled.h1`
  padding: 9px 0;
  font-family: "Montserrat", sans-serif;
`;
const IForm = styled.form`
  padding-top: 75px;
  padding-left: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Spand = styled.p`
  padding-top: 18px;
  width: 300px;
  font-size: 11px;
  letterspacing: 2px;
  color: grey;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5em;
  text-align: left;
`;
const Sa = styled.a`
  color: grey;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5em;
  letterspacing: 2px;
  text-decoration: underline;
`;
const Sdiv=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

export default SignUp1;
