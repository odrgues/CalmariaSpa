import styled, { keyframes } from "styled-components";
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

export const imageIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContentHighlights = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${theme.spacing.gapMd};
  gap: clamp(1.5rem, 3vw, 4rem);
  box-sizing: border-box;
`;

export const StyledHighlights = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 2vw, 7rem);
  padding: clamp(1rem, 3vw, 2.5rem) clamp(5%, 6vw, 9%);
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
    text-align: left;
  }
`;

export const MainImage = styled.img`
  width: clamp(100%, 100%, 40%);
  max-width: 100%;
  height: auto;
  border-radius: ${theme.radii.md};
  object-fit: cover;
  image-rendering: auto;
  transition: all 0.6s ease-out;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(10px)"};

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-sizing: border-box;

  transition: all 0.8s ease-out 0.2s;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(20px)"};

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.h2};
  color: ${theme.colors.secondary};
  font-weight: 400;
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text_primary};
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  margin-top: 0;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: justify;
  }
`;

export const Icon = styled.img`
  width: clamp(150px, 45vw, 587px);
  max-width: 100%;
  align-self: center;
  height: auto;
  margin-top: 1rem;
  opacity: 0.9;
  display: block;
`;
