import styled from "styled-components";
import { theme } from "../../styles";

export const CreatorsWrapper = styled.main`
  min-height: 85vh;
  padding: clamp(2rem, 4vw, 6rem) clamp(5%, 8vw, 8%);
  color: ${theme.colors.text};
`;

export const CreatorsTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.title_banner};
  text-align: center;
  margin-bottom: ${theme.spacing.gapMd};
`;

export const FunctionalContainer = styled.div`
  max-width: 800px;
  margin: ${theme.spacing.gapLg} auto 0 auto;
  padding: ${theme.spacing.lg} 0;
  border-top: ${theme.colors.title_banner} 2px solid;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.gapMd};

  h3 {
    font-family: "KronaOne", sans-serif;
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.title_banner};
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
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h4 {
    font-family: "KronaOne", sans-serif;
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.title_banner};
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
  color: ${theme.colors.text};
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  transition: color 0.3s;
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
  transition: background-color 0.3s;
  font-size: ${theme.fontSizes.sm};

  &:hover {
    background-color: ${theme.colors.button};
    opacity: 0.9;
  }
`;
