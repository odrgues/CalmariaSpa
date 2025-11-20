import Button from "../Button";

import { Gradient, TextContainer, Title, ButtonWrapper } from "./styles";

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
    </Gradient>
  );
};

export default Banner;
