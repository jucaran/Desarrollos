import * as React from "react";
import styled from "styled-components";
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

  #phone_bkg {
    display: none;
  }

  @media (max-width: 600px) {
    #phone_bkg {
      display: block;
    }
    #desktop_bkg {
      display: none;
    }
  }
`;

interface BackgroundProps {}

export const Background: React.FC<BackgroundProps> = () => {
  return (
    <StyledBackground>
      <div className="dark_layer"></div>
      <div id="phone_bkg">
        <Image
          src="/phone_bkg.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          className="background"
        />
      </div>
      <div id="desktop_bkg">
        <Image
          src="/desktop_bkg.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          className="background"
        />
      </div>
    </StyledBackground>
  );
};
