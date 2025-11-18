import { AboutUsData } from "../../data/aboutUsData";
import { PageWrapper, AboutTitle, ContentContainer, AboutText } from "./styles";

const AboutUsPage = () => {
  const { title, text } = AboutUsData;
  return (
    <PageWrapper>
      <AboutTitle>{title}</AboutTitle>

      <ContentContainer>
        <AboutText>{text}</AboutText>
      </ContentContainer>
    </PageWrapper>
  );
};

export default AboutUsPage;

// eu quero colocar um slider?
