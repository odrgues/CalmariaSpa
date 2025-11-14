import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  font-family: "Montserrat", sans-serif;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.$ativo ? "#535a1f" : "#0c0421")};
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    color: #424911;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    gap: 10px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    gap: 8px;
    margin: 8px 0;
  }
`;

const NavBarItem = ({ children, to, ativo = false }) => {
  return (
    <StyledLink to={to} $ativo={ativo}>
      {children}
    </StyledLink>
  );
};

export default NavBarItem;
