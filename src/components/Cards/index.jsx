import { StyledCard, Illustration, Paragraph, CardTitle, Icon } from "./styles";

const Cards = ({ image, text, title, icon }) => {
  return (
    <StyledCard>
      <Illustration src={image} alt="Imagem ilustrativa" />
      <CardTitle>{title}</CardTitle>
      <Icon src={icon} alt="Ícone de Estrela" />
      <Paragraph>{text}</Paragraph>
    </StyledCard>
  );
};

export default Cards;
