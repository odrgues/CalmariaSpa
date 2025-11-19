import { useState } from "react";
import contactImage from "../../assets/contact-image.png";
import Button from "../Button";
import {
  ContactWrapper,
  ImageContainer,
  ContactImage,
  FormContainer,
  Title,
  Subtitle,
  Form,
  Label,
  Input,
  TextArea,
  Message,
} from "./styles";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (feedbackMessage) setFeedbackMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFeedbackMessage(
        "Por favor, preencha todos os campos obrigatórios (Nome, Email e Mensagem)."
      );
      setIsError(true);
      return;
    }

    console.log("Dados do formulário enviados:", formData);
    setFeedbackMessage(
      "Mensagem enviada com sucesso! Em breve entraremos em contato."
    );
    setIsError(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <ContactWrapper>
      <ImageContainer>
        <ContactImage src={contactImage} alt="Pessoas relaxando no spa" />
      </ImageContainer>
      <FormContainer>
        <Title>Entre em contato</Title>
        <Subtitle>
          Reserve seu horário, tire dúvidas ou proponha sugestões, nosso canal é
          aberto para você!
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label htmlFor="phone">Telefone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(XX) XXXX-XXXX"
            value={formData.phone}
            onChange={handleChange}
          />

          <Label htmlFor="message">Mensagem</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem"
            value={formData.message}
            onChange={handleChange}
          />

          <Button type="submit" $formStyle={true}>
            Enviar
          </Button>
        </Form>
        {feedbackMessage && (
          <Message $isError={isError}>{feedbackMessage}</Message>
        )}
      </FormContainer>
    </ContactWrapper>
  );
};

export default ContactSection;
