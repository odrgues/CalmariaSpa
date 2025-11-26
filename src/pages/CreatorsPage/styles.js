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

export const CreatorsWrapper = styled.main`
  min-height: 100vh;
  padding: clamp(2rem, 4vw, 6rem) clamp(5%, 8vw, 8%);
  color: ${theme.colors.text_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatorsTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.gapMd};
  animation: ${fadeUp} 0.5s ease forwards;
`;

export const CreatorsText = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  font-size: 1.15rem;
  line-height: 1.9;
  color: #333;
  text-align: justify;
  animation: ${fadeUp} 0.7s ease forwards;

  p {
    margin-bottom: ${theme.spacing.gapMd};
  }

  p[center] {
    text-align: center;
    font-size: 1.22rem;
    font-weight: 600;
    color: ${theme.colors.primary};
  }

  strong {
    color: ${theme.colors.primary};
    font-weight: 700;
  }
`;

export const FunctionalContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: ${theme.spacing.gapLg} auto 0 auto;
  padding: ${theme.spacing.lg} 0;
  border-top: ${theme.colors.primary} 2px solid;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.gapMd};
  animation: ${fadeUp} 0.9s ease forwards;

  h3 {
    font-family: "KronaOne", sans-serif;
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.primary};
    text-align: center;
    margin-bottom: ${theme.spacing.md};
  }
`;

export const CreatorActionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.gradients.card};
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.soft};
  animation: ${fadeUp} 1s ease forwards;

  h4 {
    font-family: "KronaOne", sans-serif;
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.primary};
    font-weight: normal;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
    padding: ${theme.spacing.md};

    h4 {
      width: 100%;
    }
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.text_primary};
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.button};
  }
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.button};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.radii.pill};
  font-weight: 600;
  transition: 0.3s ease;
  font-size: ${theme.fontSizes.sm};

  &:hover {
    opacity: 0.85;
  }
`;
