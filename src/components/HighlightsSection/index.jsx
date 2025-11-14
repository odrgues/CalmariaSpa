import { useInView } from "react-intersection-observer";
import {
  ContentHighlights,
  StyledHighlights,
  MainImage,
  TextContainer,
  Title,
  Paragraph,
  Icon,
} from "./styles";

const HighlightsSection = ({ image, title, text, icon, reverse }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const isVisible = inView;
  return (
    <ContentHighlights ref={ref}>
      <StyledHighlights $reverse={reverse}>
        <MainImage
          src={image}
          alt="Imagem ilustrativa"
          $isVisible={isVisible}
        />
        <TextContainer $isVisible={isVisible}>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
          {icon && <Icon src={icon} alt="Ícone ilustrativo" />}
        </TextContainer>
      </StyledHighlights>
    </ContentHighlights>
  );
};

export default HighlightsSection;
