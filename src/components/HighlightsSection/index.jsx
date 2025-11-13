import styled from "styled-components";

const ContentHighlights = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  gap: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 2.5rem;
  }
`;

const StyledHighlights = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  padding: 2rem 8%;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 1rem 5%;
  }
`;

const MainImage = styled.img`
  width: 35%;
  border-radius: 16px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 587px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 31px;
  color: #4d6bff;
  font-weight: 400;
  font-family: "KronaOne", sans-serif;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #0c0421;
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  margin-top: -10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Icon = styled.img`
  width: 587px;
  height: auto;
  margin-top: 1rem;
  opacity: 0.9;
  max-width: 100%;
  display: block;

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const HighlightsSection = ({ image, title, text, icon, reverse }) => {
  return (
    <ContentHighlights>
      {" "}
      <StyledHighlights reverse={reverse}>
        <MainImage src={image} alt="Imagem ilustrativa" />{" "}
        <TextContainer>
          <Title>{title}</Title> <Paragraph>{text}</Paragraph>{" "}
          {icon && <Icon src={icon} alt="Ícone ilustrativo" />}{" "}
        </TextContainer>{" "}
      </StyledHighlights>{" "}
    </ContentHighlights>
  );
};

export default HighlightsSection;
