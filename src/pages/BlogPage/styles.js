import styled, { css } from "styled-components";
import blogBanner from "../../assets/blog-banner.jpg";
export const PageWrapper = styled.main``;
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
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9);
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 15px;
  }
`;

export const PostCard = styled.div``;
export const PostImage = styled.img`
  width: 20%;
  height: auto;
  margin-top: 10rem;
`;
export const PostText = styled.p``;
export const PostContent = styled.div``;

export const PostsContainer = styled.div``;
export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 450px;
  margin: 2rem auto 4rem auto;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  ${(props) =>
    props.$active &&
    css`
      opacity: 1;
      z-index: 10;
      animation: ${fadeIn} 1s ease-in-out;
    `}
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 10px;
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
  }
`;
