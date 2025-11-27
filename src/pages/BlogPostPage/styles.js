import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import media from "../../styles/breakpoints";

export const BlogPostWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  ${media.bp768`
        padding: ${theme.spacing.xl} ${theme.spacing.lg};
    `}
  padding-bottom: ${theme.spacing.xxl};
`;

export const PostCover = styled.img`
  width: 100%;
  height: clamp(300px, 40vw, 500px);
  object-fit: cover;
  margin-bottom: ${theme.spacing.xl};
  border-radius: ${theme.radii.md};
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
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;

export const PostContent = styled.div`
  p {
    font-size: ${theme.fontSizes.lg};
    line-height: 1.7;
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.text_primary};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: ${theme.spacing.xl} auto;
    border-radius: ${theme.radii.sm};
  }

  h2 {
    font-size: ${theme.fontSizes.h2};
    color: ${theme.colors.primary};
    margin-top: ${theme.spacing.xxl};
    margin-bottom: ${theme.spacing.md};
  }

  ul {
    margin-bottom: ${theme.spacing.lg};
    padding-left: 1.5rem;
    list-style-type: disc;
  }
`;
