import styled, { keyframes } from "styled-components";
import { theme } from "../../styles";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.main`
  min-height: 100vh;
  padding: clamp(2rem, 4vw, 6rem) clamp(5%, 8vw, 8%);
  color: ${theme.colors.text_primary};
`;

export const AboutTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.gapMd};
  animation: ${fadeUp} 0.5s ease forwards;
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  line-height: 1.8;
  animation: ${fadeUp} 0.7s ease forwards;
`;

export const AboutContent = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text_primary};

  p {
    margin-bottom: ${theme.spacing.gapMd};
    text-align: justify;
  }

  strong {
    color: ${theme.colors.primary};
  }
  animation: ${fadeUp} 0.9s ease forwards;
`;

export const InlineImage = styled.div`
  float: right;
  width: clamp(200px, 35vw, 350px);
  margin: 0 0 ${theme.spacing.md} ${theme.spacing.md};

  img {
    width: 100%;
    height: auto;
    border-radius: ${theme.radii.md};
    display: block;
  }

  @media (max-width: 768px) {
    float: none;
    margin: ${theme.spacing.md} auto;
    display: flex;
    justify-content: center;
  }
`;

export const FooterImage = styled.div`
  margin-top: ${theme.spacing.xl};
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 1200px;
    height: 250px;
    object-fit: cover;
    border-radius: ${theme.radii.md};
  }
`;
