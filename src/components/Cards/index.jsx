import { StyledCard, Paragraph, CardTitle } from "./styles";

const Cards = ({ text, title }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>

      <Paragraph>{text}</Paragraph>
    </StyledCard>
  );
};

export default Cards;
