import * as React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  height: 100vh;
  width: 100vw;
  background: darkblue;
`;

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <StyledAbout id="about">
      <h1>Hola turre</h1>
    </StyledAbout>
  );
};
