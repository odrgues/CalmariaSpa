import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const BlogPostWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem);
  padding-bottom: ${theme.spacing.xxl};
`;

export const PostCover = styled.img`
  width: 100%;
  height: clamp(280px, 40vw, 480px);
  object-fit: cover;
  border-radius: ${theme.radii.md};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};

  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100vw;
      margin-left: calc(50% - 50vw);
      border-radius: 0;
      margin-top: -${theme.spacing.xl};
    `}
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: ${theme.spacing.xxl};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text_muted};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;

export const PostContent = styled.div`
  color: #333;
  font-size: 1.15rem;
  line-height: 1.5;

  h1 {
    font-family: "KronaOne", sans-serif;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.xl};
    font-size: ${theme.fontSizes.h1};
    text-align: center;
    line-height: 1.3;
  }

  h2 {
    font-family: "KronaOne", sans-serif;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.h3};
    margin-top: ${theme.spacing.xxl};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.4rem);
    font-weight: 600;
    margin-top: ${theme.spacing.xl};
    color: ${theme.colors.secondary};
  }

  p {
    margin-bottom: ${theme.spacing.gapMd};
    text-align: justify;
  }

  strong {
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  ul {
    margin: ${theme.spacing.lg} 0;
    padding-left: 1.6rem;
    list-style: disc;

    li {
      margin-bottom: ${theme.spacing.sm};
      line-height: 1.7;
      list-style: none;
    }
  }

  blockquote {
    margin: ${theme.spacing.xl} auto;
    padding: ${theme.spacing.lg};
    font-style: italic;
    color: #444;
    border-left: 4px solid ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.03);
    border-radius: ${theme.radii.sm};
    line-height: 1.8;
  }
`;
