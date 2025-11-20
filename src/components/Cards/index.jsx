import { StyledCard, Paragraph, CardTitle } from "./styles";

// const CardsContainer = styled.section`
//   display: flex;
//   justify-content: center;
//   gap: 2.5rem;
//   padding: 4rem 8%;
//   background: linear-gradient(to bottom, #dbd6d3, #ffffff);

//   margin-top: 4rem;

//   @media (max-width: 1024px) {
//     flex-wrap: wrap;
//     max-width: 460px;
//   }
// `;

const Cards = ({ text, title }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <Paragraph>{text}</Paragraph>
    </StyledCard>
  );
};

export default Cards;
