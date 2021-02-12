import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledCTA = styled.div`
  position: absolute;
  bottom: 1rem;
  margin: 0 auto;
  width: auto;

  a {
    color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    span {
      padding-bottom: 0.5rem;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
    &:focus {
      span {
        margin-bottom: -0.2rem;
      }
      img {
        transform: scale(1.2);
      }
    }
  }
`;

interface utilsProps {
  text: string;
  to: string;
}

export const CTA: React.FC<utilsProps> = ({ text, to }) => {
  return (
    <StyledCTA>
      <a href={to}>
        <span>{text}</span>
        <Image src="/arrow.svg" width={80} height={15} alt="Flecha" />
      </a>
    </StyledCTA>
  );
};
