import styled from "styled-components";
import { theme } from "../../styles";

export const StyledFooter = styled.footer`
  color: ${theme.colors.text_primary};
  padding: 2.5rem 5%;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to top, #dbd6d3, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: clamp(120px, 25vw, 150px);
    height: auto;
    margin-bottom: 1.5rem;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: ${theme.fontSizes.md};
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.muted};
    margin: 0;
    padding-top: 10px;
  }
`;
