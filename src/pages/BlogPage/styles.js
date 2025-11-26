import styled, { css } from "styled-components";
import blogBanner from "../../assets/blog-banner.jpg";
import theme from "../../styles/theme";
import media from "../../styles/breakpoints";

export const PageWrapper = styled.main`
  min-height: 80vh;
  padding-bottom: ${theme.spacing.xl};
`;

export const Banner = styled.div`
  background-image: url(${blogBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  filter: brightness(0.85);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.bp768`
    height: 350px;
  `}
`;

export const BlogTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.h1};
  font-weight: 700;
  text-align: center;
  max-width: 900px;
  padding: 0 1rem;
  line-height: 1.2;
`;

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: ${theme.spacing.xl} auto;
  display: grid;
  gap: ${theme.spacing.xl};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  ${media.bp768`
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  `}

  ${media.bp1024`
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  `}
`;

export const PostCard = styled.div`
  background: ${theme.gradients.card};
  border-radius: ${theme.radii.md};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${PostCard}:hover & {
    transform: scale(1.05);
  }

  ${media.bp768`
    height: 260px;
  `}
`;

export const PostContent = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const PostTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.primary};
  margin-bottom: 0.2rem;
  line-height: 1.3;
  font-weight: 600;

  ${PostCard}:hover & {
    color: ${theme.colors.accent};
  }

  ${media.bp768`
    font-size: ${theme.fontSizes.xl};
  `}
`;

export const PostText = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.text_muted};
  line-height: 1.6;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
