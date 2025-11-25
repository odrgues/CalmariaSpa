import styled from "styled-components";
import { theme } from "../../styles";
import { media } from "../../styles/breakpoints";
import { useLocation } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 18px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 25px;
    padding: 0 3%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 1%;
    text-align: center;
  }
  ${media.bp1366`
    gap: 24px;
  `}
  ${media.bp1920`
    gap: 20px;
  `}
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
