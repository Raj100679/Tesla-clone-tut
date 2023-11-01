import React, { useState } from "react";
import styled from "styled-components";

function Region() {
    const styleselect={
        width:"300px",
        height:"35px",
        backgroundColor: "#f4f4f4",
        borderRadius:"5px",
        border:"none",
        fontSize:"12px",
        letterSpacing:".5px",
        color:"#8e8e8e",
        paddingLeft:"5px",
        
    }
   
    
    
  return (
    <Box>
      <label style={{border:"none"}} for="region"></label>
      <hselect>
        <select id="region" name="region" style={styleselect}>
          <option value="northamerica">North America</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="southamerica">South America</option>
          <option value="australia">Australia</option>
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
export default Region;
