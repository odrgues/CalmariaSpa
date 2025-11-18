import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav>
      <StyledNavBar>
        <NavBarItem to="/" ativo={pathname === "/"}>
          Home
        </NavBarItem>
        <NavBarItem to="/servicos" ativo={pathname === "/servicos"}>
          Serviços
        </NavBarItem>
        <NavBarItem to="/blog" ativo={pathname === "/blog"}>
          Blog
        </NavBarItem>
        <NavBarItem to="/quem-somos" ativo={pathname === "/quem-somos"}>
          Quem Somos
        </NavBarItem>
        <NavBarItem
          to="/nossos-criadores"
          ativo={pathname === "/nossos-criadores"}
        >
          Nossos Criadores
        </NavBarItem>
      </StyledNavBar>
    </nav>
  );
};

export default NavBar;
