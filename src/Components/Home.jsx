import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtn="Order Online"
        rightBtn="Exisiting Inventory"
      />
      <Section
        title="Model-Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtn="Order Online"
        rightBtn="Exisiting Inventory"
      />
      <Section
        title="Model-3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtn="Order Online"
        rightBtn="Exisiting Inventory"
      />
      <Section
        title="Model-X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtn="Order Online"
        rightBtn="Exisiting Inventory"
      />
       <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtn="Order Online"
        rightBtn="Learn More"
      />
       <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtn="Order Online"
        rightBtn="Learn More"
      />
        <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtn="Shop Now"
      />
      
    </Container>
  );
}

const Container = styled.div`
  font-size: 20px;
`;
export default Home;
