import styled, { keyframes, css } from "styled-components";

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
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContentHighlights = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  gap: 4rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 2.5rem;
  }
`;

export const StyledHighlights = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  padding: 2rem 8%;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 4rem;
    padding: 2rem 6%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 1rem 5%;
  }
`;

export const MainImage = styled.img`
  width: 35%;
  max-width: 100%;
  height: 480px;
  border-radius: 16px;
  object-fit: cover;
  image-rendering: auto;
  transition: all 0.7s ease-out;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) => (props.$isVisible ? "scale(1)" : "scale(0.98)")};

  &:hover {
    /* Mantemos a transição de hover, que agora é mais fluida por causa do 'all 0.7s' acima */
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 587px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

  transition: all 0.8s ease-out 0.2s;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible ? "translateY(0)" : "translateY(20px)"};

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 31px;
  color: #777c6d;
  font-weight: 400;
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #0c0421;
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  margin-top: -10px;
  text-align: justify;

  @media (max-width: 1024px) {
    font-size: 19px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    text-align: center;
  }
`;

export const Icon = styled.img`
  width: 587px;
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  opacity: 0.9;
  display: block;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;
