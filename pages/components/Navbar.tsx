import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledNavbar = styled.nav`
  width: 100vw;
  padding: 1.2rem 2rem;
  background: rgba(39, 39, 39, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav_icon:last-child {
    margin-left: 0.5rem;
    /* background: pink; */
  }

  img {
    cursor: pointer;
  }
`;

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <div className="left">
        <span className="menu_icon">
          <Image src="/menu_icon.svg" width={35} height={30} alt="Menú" />
        </span>
      </div>
      <div className="right">
        <span className="nav_icon">
          <Image src="/chat_icon.svg" width={35} height={35} alt="Contacto" />
        </span>
        <span className="nav_icon">
          <Image src="/cart_icon.svg" width={35} height={35} alt="Carrito" />
        </span>
      </div>
    </StyledNavbar>
  );
};
