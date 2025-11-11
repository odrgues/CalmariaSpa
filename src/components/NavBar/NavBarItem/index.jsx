import styled from "styled-components";

const StylezedItem = styled.li`
  font-size: 18px;
  line-height: 29px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#747F30" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  &:hover {
    color: #747f30;
  }
`;

const NavBarItem = ({ children, ativo = false }) => {
  return <StylezedItem $ativo={ativo}>{children}</StylezedItem>;
};

export default NavBarItem;
