import styled, { css } from "styled-components";

export const SlideImage = styled.img`
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

export const PageWrapper = styled.main`
  min-height: 80vh;
  padding: 6rem 8%;
  margin-top: -4rem;
  background: linear-gradient(to bottom, #c8e1f5 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

export const ServicesTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: 3rem;
  color: #042285ff;
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`;
