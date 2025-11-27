import styled from "styled-components";
import theme from "./theme";
import media from "./breakpoints";

export const BannerBase = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.8);
  width: 100%;
  min-height: 265px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 4%;
  gap: 30px;

  ${media.bp768`
    min-height: 300px; 
  `}
`;
