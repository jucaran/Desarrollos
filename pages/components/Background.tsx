import * as React from "react";
import styled from "styled-components";
// import BackgroundImage from "../media/background.jpg";
import Image from "next/image";

const StyledBackground = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -2;

  .dark_layer {
    background: rgba(53, 72, 94, 0.3);
    opacity: 0.3;
    z-index: -1;
  }
`;

interface BackgroundProps {}

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <StyledBackground>
      <div className="dark_layer"></div>
      <Image
        src="/background.jpg"
        layout="intrinsic"
        alt="Fondo"
        width={414}
        height={736}
        className="background"
      />
    </StyledBackground>
  );
};
