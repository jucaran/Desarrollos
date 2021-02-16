import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CTA } from "./Utils";

const StyledHome = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    padding: 1rem 0;
    color: #eee;
    font-size: 2.5rem;
    font-weight: normal;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    color: #eee;
    font-family: "Rubik", sans-serif;
  }
`;

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <StyledHome>
      <Image
        src="/isotype.svg"
        width={104}
        height={108}
        alt="Desarrollos Textiles Logo"
      />
      <h1>Desarrollos Textiles</h1>
      <p>Innovación en procesos</p>
      <CTA text="VER MÁS" to="#about" />
    </StyledHome>
  );
};
