import { useState } from "react";
import {
  StyledSubscriptionBanner,
  Title,
  Subtitle,
  FormContainer,
  Input,
  Message,
  Icon,
  CenterWrapper,
  // DecorImage,
} from "./styles";
import Button from "../Button";
import icon from "../../assets/highlights/iconHighlights-1.png";
// import decorImage from "../../assets/decor-image-black.png";

const SubscriptionBanner = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validadeEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setMessage("Digite seu email.");
      setIsError(true);
      return;
    }
    if (!validadeEmail(email)) {
      setMessage("Email inválido.");
      setIsError(true);
      return;
    }

    setMessage("Email cadastrado com sucesso!");
    setIsError(false);
    setEmail("");
  };

  return (
    <StyledSubscriptionBanner>
      {/* <DecorImage src={decorImage} alt="Decoração lateral" /> */}
      <Title>Inscreva-se para receber descontos!</Title>
      <Subtitle>
        Cadastre seu email para receber descontos e novidades sobre o espaço e
        nossos serviços.
      </Subtitle>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (message) setMessage("");
          }}
        />
        <Button type="submit" $subscribeStyle={true}>
          Inscrever
        </Button>
      </FormContainer>

      <CenterWrapper>
        <Icon src={icon} alt="Ícone decorativo" />
        {message && <Message $isError={isError}>{message}</Message>}
      </CenterWrapper>

      {/* <DecorImage src={decorImage} alt="Decoração lateral" $rightSide={true} /> */}
    </StyledSubscriptionBanner>
  );
};

export default SubscriptionBanner;
