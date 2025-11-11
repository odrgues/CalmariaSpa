import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const StylezedNavBar = styled.div``;

const NavBar = () => {
  return (
    <nav>
      <StylezedNavBar>
        <NavBarItem>Home</NavBarItem>
        <NavBarItem>Serviços</NavBarItem>
        <NavBarItem>Blog</NavBarItem>
        <NavBarItem>Quem Somos</NavBarItem>
      </StylezedNavBar>
    </nav>
  );
};

export default NavBar;
