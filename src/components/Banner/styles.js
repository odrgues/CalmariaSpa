import styled, { keyframes } from "styled-components";

export const textIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const imageIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Gradient = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 480px;
  padding: 0;
  margin-top: -30px;
  gap: 6rem;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #c8e1f5 0%, #ffffff 100%);

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 5rem 6%;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 2.5rem;
    padding: 4rem 5%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 3rem 5%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 486px;

  ${(props) =>
    props.$isVisible &&
    css`
      animation: ${textIn} 0.8s ease-out forwards;
    `}

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const BannerImage = styled.img`
  width: 40%;
  max-width: 468px;
  height: auto;
  object-fit: contain;
  display: block;

  animation: ${imageIn} 1s ease-out 0.2s forwards;

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;

  &:hover {
    transform: scale(1.05);
    background-color: 0 6px 18px plum);
  }

  @media (max-width: 900px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
  color: #0c0421;
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;
  margin: 0;
  text-align: left;

  span {
    color: #042285ff;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
    line-height: 1.4;
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.4;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;
