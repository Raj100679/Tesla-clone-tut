import React, { useState } from "react";
import styled from "styled-components";

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };
  const styleselect = {
    width: "300px",
    height: "35px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "none",
    fontSize: "12px",
    letterSpacing: ".5px",
    color: "#8e8e8e",
    paddingLeft:"8px",

  };

  return (
    <Box>
      <label htmlFor="languageSelect"></label>
      <hselect>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          style={styleselect}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
      </hselect>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px 0;
`;
const hselect = styled.div`
  width: 500px;
`;
export default LanguageDropdown;
