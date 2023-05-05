import React from 'react'
import styled from 'styled-components'
// import Header from './Header'
import Section from './Section'

function Home() {
  return (
    // Container is styled components and command to install is npm add styled-components
    <Container>
      
        
      <Section
      title="Model S"
      description="Order Online for Touches Delivery"
      leftButtonText="CUSTOM ORDER"
      rightButtonText="EXISTING INVENTORY"
      backgroundImg="model-s.jpg"
      />
      <Section
      title="Model Y"
      description="Order Online for Touches Delivery"
      leftButtonText="CUSTOM ORDER"
      rightButtonText="EXISTING INVENTORY"
      backgroundImg="model-y.jpg"
      />
      
      <Section
      title="Model 3"
      description="Order Online for Touches Delivery"
      leftButtonText="CUSTOM ORDER"
      rightButtonText="EXISTING INVENTORY"
      backgroundImg="model-3.jpg"
      />
      
      <Section
      title="Model X"
      description="Order Online for Touches Delivery"
      leftButtonText="CUSTOM ORDER"
      rightButtonText="EXISTING INVENTORY"
      backgroundImg="model-x.jpg"
      />
      <Section
      title="Lowest Cost Solar Panels in Pakistan"
      description="100% Money-back Guarantee"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      backgroundImg="solar-panel.jpg"
      />
      <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      backgroundImg="solar-roof.jpg"
      />
      <Section
      title="Accesories"
      description="Get your accessories here"
      leftButtonText="Shop Now"
      
      backgroundImg="accessories.jpg"
      />
    </Container>
  )
}

export default Home

// styled component is taking height of 100vh
const Container = styled.div`
height: 100vh;

`