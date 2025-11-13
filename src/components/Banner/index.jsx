import styled, { keyframes } from "styled-components";
import bannerImg from "../../assets/image-banner.png";
import Button from "../Button";

const textIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imageIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Gradient = styled.section`
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
  background: linear-gradient(to bottom, #e8f5c8 0%, #ffffff 100%);

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 486px;

  animation: ${textIn} 0.8s ease-out forwards;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const BannerImage = styled.img`
  width: 40%;
  max-width: 468px;
  height: auto;
  object-fit: contain;
  display: block;

  animation: ${imageIn} 1s ease-out 0.2s forwards; /* Tempo maior e um delay sutil (0.2s) */

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

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
  color: #0c0421;
  font-family: "KronaOne", sans-serif;
  line-height: 1.3;

  span {
    color: #4e75ff;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Banner = () => {
  return (
    <Gradient>
      <TextContainer>
        <Title>
          Boas-vindas ao seu refúgio de <span>paz e bem-estar</span>
        </Title>
        <ButtonWrapper>
          <Button>Quero relaxar!</Button>
        </ButtonWrapper>
      </TextContainer>

      <BannerImage src={bannerImg} alt="Banner do Calmaria Spa" />
    </Gradient>
  );
};

export default Banner;
