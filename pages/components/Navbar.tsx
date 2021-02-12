import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

interface NavbarProps {}

const StyledNavbar = styled.nav`
  width: 100vw;
  padding: 0 1rem;
  background: rgba(39, 39, 39, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  ul {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #chat_icon {
      margin: 2rem;
    }

    img {
      cursor: pointer;
    }
  }
`;

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Image
            id="menu_icon"
            src="/menu_icon.svg"
            width={35}
            height={30}
            alt="Menú"
          />
        </li>
        <li>
          <Image
            id="chat_icon"
            className="chat_icon"
            src="/chat_icon.svg"
            width={35}
            height={35}
            alt="Contacto"
          />
          <Image
            id="cart_icon"
            src="/cart_icon.svg"
            width={35}
            height={35}
            alt="Carrito"
          />
        </li>
      </ul>
    </StyledNavbar>
  );
};
