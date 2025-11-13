import styled from "styled-components";

const StyledItem = styled.li`
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#535a1fff" : "#000")};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  color: #0c0421;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover {
    color: #424911ff;
  }
`;

const NavBarItem = ({ children, ativo = false }) => {
  return <StyledItem $ativo={ativo}>{children}</StyledItem>;
};

export default NavBarItem;
