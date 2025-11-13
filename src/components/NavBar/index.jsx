import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;

  gap: 30px;
  whidth: 100%;
`;

const NavBar = () => {
  return (
    <nav>
      <StyledNavBar>
        <NavBarItem>Home</NavBarItem>
        <NavBarItem>Serviços</NavBarItem>
        <NavBarItem>Blog</NavBarItem>
        <NavBarItem>Quem Somos</NavBarItem>
      </StyledNavBar>
    </nav>
  );
};

export default NavBar;
