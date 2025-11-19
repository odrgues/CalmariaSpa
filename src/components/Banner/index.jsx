import bannerImg from "../../assets/image-banner.png";

import Button from "../Button";

import {
  Gradient,
  TextContainer,
  Title,
  ButtonWrapper,
  BannerImage,
} from "./styles";

const Banner = () => {
  return (
    <Gradient>
      <TextContainer>
        <Title>
          Boas-vindas ao seu refúgio de <span>paz e bem-estar</span>
        </Title>
        <ButtonWrapper>
          <Button to="servicos">Quero relaxar!</Button>
        </ButtonWrapper>
      </TextContainer>

      <BannerImage src={bannerImg} alt="Banner do Calmaria Spa" />
    </Gradient>
  );
};

export default Banner;
