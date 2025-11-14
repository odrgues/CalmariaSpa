import { StyledCard, Illustration, Paragraph } from "./styles";

const Cards = ({ image, text }) => {
  return (
    <StyledCard>
      <Illustration src={image} alt="Imagem ilustrativa" />
      <Paragraph>{text}</Paragraph>
    </StyledCard>
  );
};

export default Cards;
