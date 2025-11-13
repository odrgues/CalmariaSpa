import styled from "styled-components";

const StyledItem = styled.li`
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

const NavBarItem = ({ children, ativo = false }) => {
  return <StyledItem $ativo={ativo}>{children}</StyledItem>;
};

export default NavBarItem;
