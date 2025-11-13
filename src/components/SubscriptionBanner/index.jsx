import { useState } from "react";
import {
  StyledSubscriptionBanner,
  Title,
  Subtitle,
  FormContainer,
  Input,
  Button,
  Message,
  DecorImage,
} from "./styles";
import decorImage from "../../assets/decor-image.png";

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
    console.log("email enviado:", email);

    setMessage("Email cadastrado com sucesso!");
    setIsError(false);
    setEmail("");
  };

  return (
    <StyledSubscriptionBanner>
      <DecorImage src={decorImage} alt="Decoração lateral" />
      <Title>Inscreva-se para receber descontos!</Title>
      <Subtitle>
        Cadastre seu email para receber descontos e novidades sobre o espaço e
        nossos serviços.
      </Subtitle>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (message) setMessage("");
          }}
        />

        <Button type="submit"> Inscrever</Button>
      </FormContainer>

      {message && <Message $isError={isError}> {message}</Message>}
      <DecorImage src={decorImage} alt="Decoração lateral" $rightSide={true} />
    </StyledSubscriptionBanner>
  );
};

export default SubscriptionBanner;
