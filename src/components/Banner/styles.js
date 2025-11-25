import styled, { keyframes, css } from "styled-components";
import { theme } from "../../styles";

export const textIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Gradient = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: auto;
  padding: clamp(1.5rem, 5vw, 5rem) clamp(5%, 8vw, 8%);
  gap: clamp(1rem, 3vw, 6rem);
  box-sizing: border-box;
  background: ${theme.gradients.brownTop};
  text-align: center;
  margin-top: clamp(2rem, 5vw, 60px);

  @media (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 1rem;

  ${(props) =>
    props.$isVisible &&
    css`
      animation: ${textIn} 0.8s ease-out forwards;
    `}
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.h1};
  font-weight: 400;
  color: ${theme.colors.title_banner};
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;
  margin: 0;
  text-align: center;
  white-space: normal;
  overflow: visible;
  text-overflow: clip;

  span {
    color: ${theme.colors.span};
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
