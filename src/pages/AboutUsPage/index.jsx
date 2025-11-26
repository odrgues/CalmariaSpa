import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { AboutUsData } from "../../data/aboutUsData";

import {
  PageWrapper,
  AboutTitle,
  ContentContainer,
  InlineImage,
  FooterImage,
  AboutContent,
} from "./styles";

const AboutUsPage = () => {
  const { title, text, inlineImage, footerImage } = AboutUsData;

  const paragraphs = text.match(/<p[\s\S]*?<\/p>/gi) || [];
  const insertAfter = Math.min(2, paragraphs.length);

  return (
    <>
      <Header />
      <NavBar />

      <PageWrapper>
        <AboutTitle>{title}</AboutTitle>

        <ContentContainer>
          <AboutContent>
            {paragraphs.slice(0, insertAfter).map((p, i) => (
              <div
                key={`p-before-${i}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <InlineImage>
              <img
                src={inlineImage}
                alt="Sala de relaxamento do Calmaria Spa"
              />
            </InlineImage>

            {paragraphs.slice(insertAfter).map((p, i) => (
              <div
                key={`p-after-${i}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <FooterImage>
              <img src={footerImage} alt="Interior do Calmaria Spa" />
            </FooterImage>
          </AboutContent>
        </ContentContainer>
      </PageWrapper>
    </>
  );
};

export default AboutUsPage;
