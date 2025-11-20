import styled, { css } from "styled-components";
import blogBanner from "../../assets/blog-banner.jpg";

export const PageWrapper = styled.main`
  min-height: 80vh;
  background-color: #f5f0eb;
  padding-bottom: 4rem;
`;

export const Banner = styled.div`
  background-image: url(${blogBanner});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  filter: brightness(0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 250px;
    background-size: cover;

    background-position: center center;
  }
`;
export const BlogTitle = styled.h1`
  color: #ffffff;

  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 15px;
  }
`;

export const PostsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
    gap: 2rem;
  }
`;

export const PostCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-top: 0;
  transition: transform 0.4s ease;

  ${PostCard}:hover & {
    transform: scale(1.05);
  }
`;

export const PostContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
`;

export const PostTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #1a2a53;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  font-weight: 600;

  ${PostCard}:hover & {
    color: #a89083;
  }
`;

export const PostText = styled.p`
  font-size: 1rem;
  color: #5d667a;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
