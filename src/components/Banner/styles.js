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

export const Gradient = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 480px;
  padding: 0;
  margin-top: 60px;
  gap: 6rem;
  box-sizing: border-box;
  background: linear-gradient(to top, #dbd6d3, #ffffff);

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
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 1rem;

  ${(props) =>
    props.$isVisible &&
    css`
      animation: ${textIn} 0.8s ease-out forwards;
    `}
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
  color: #452829;
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow-x: auto;
  text-overflow: ellipsis;

  span {
    color: #7b5e57;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
    line-height: 1.4;
    text-align: left;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.4;
    text-align: left;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  width: auto;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 100%;
  }
`;
