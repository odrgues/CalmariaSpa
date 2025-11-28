import styled from "styled-components";
import media from "./breakpoints";

export const BannerBase = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.8);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 3rem 4%;
  min-height: auto;

  ${media.bp768`
    min-height: 200px;
  `}
`;
