import styled from "styled-components";
import { theme } from "../../styles";
import { media } from "../../styles/breakpoints";

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: start;
  padding: 0 2.5rem;
  font-weight: 400;
  line-height: 1.75;
  color: ${theme.colors.title_highlight};

  ${media.bp1366`
    padding: 0 1.5rem;
    font-size: 1.4rem;
  `}
`;

export default Title;
