import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import media from "../../styles/breakpoints";

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
  font-size: 0.98rem;
  line-height: 1.55;
  padding: 0 0.5rem;

  h1 {
    font-family: "KronaOne", sans-serif;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
    font-size: clamp(1.6rem, 6vw, 2rem);
    text-align: center;
    line-height: 1.3;
  }

  h2 {
    font-family: "KronaOne", sans-serif;
    color: ${theme.colors.primary};
    font-size: clamp(1.2rem, 5vw, 1.4rem);
    margin-top: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.sm};
  }

  h3 {
    font-size: clamp(1.05rem, 4vw, 1.2rem);
    font-weight: 600;
    margin-top: ${theme.spacing.lg};
    color: ${theme.colors.secondary};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    text-align: justify;
    font-size: 0.95rem;
  }

  strong {
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  ul {
    margin: ${theme.spacing.md} 0;
    padding-left: 1.2rem;
    list-style: disc;

    li {
      margin-bottom: ${theme.spacing.sm};
      line-height: 1.6;
      list-style: none;
      font-size: 0.95rem;
    }
  }

  blockquote {
    margin: ${theme.spacing.xl} auto;
    padding: ${theme.spacing.md};
    font-style: italic;
    color: #444;
    border-left: 4px solid ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.03);
    border-radius: ${theme.radii.sm};
    line-height: 1.7;
    font-size: 0.95rem;
  }

  ${media.bp600`
    font-size: 1rem;
    p { font-size: 1rem; }
    ul li { font-size: 1rem; }
    blockquote { font-size: 1rem; }
  `}

  ${media.bp768`
    padding: 0; 
    font-size: 1.05rem;
    line-height: 1.6;

    h1 { font-size: ${theme.fontSizes.h1}; }
    h2 { font-size: ${theme.fontSizes.h3}; }
    h3 { font-size: 1.3rem; }
  `}

  
  ${media.bp1024`
    font-size: 1.12rem;

    p { font-size: 1.1rem; }

    blockquote {
      font-size: 1.05rem;
      padding: ${theme.spacing.lg};
    }

    ul li { font-size: 1.05rem; }
  `}

  
  ${media.bp1366`
    font-size: 1.15rem;
    line-height: 1.65;

    p { font-size: 1.15rem; }
  `}
`;
