import { CreatorsData } from "../../data/creatorsData";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import {
  CreatorsWrapper,
  CreatorsTitle,
  FunctionalContainer,
  CreatorsText,
  CreatorActionCard,
  SocialLinksWrapper,
  SocialLink,
  DownloadButton,
} from "./styles";

const CreatorsPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <CreatorsWrapper>
        <CreatorsTitle>{CreatorsData.title}</CreatorsTitle>

        <CreatorsText>
          <div dangerouslySetInnerHTML={{ __html: CreatorsData.narrative }} />
        </CreatorsText>

        <FunctionalContainer>
          <h3>Conecte-se e Baixe Nossos Currículos</h3>

          {CreatorsData.functionalLinks.map((creator) => (
            <CreatorActionCard key={creator.id}>
              <h4>{creator.name}</h4>

              <SocialLinksWrapper>
                <SocialLink
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </SocialLink>

                <SocialLink
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </SocialLink>
              </SocialLinksWrapper>

              {creator.cvPath && (
                <DownloadButton
                  href={creator.cvPath}
                  download={`curriculo_${creator.name.replace(/\s/g, "_")}.pdf`}
                >
                  <FaDownload style={{ marginRight: "8px" }} /> Baixar CV
                </DownloadButton>
              )}
            </CreatorActionCard>
          ))}
        </FunctionalContainer>
      </CreatorsWrapper>
    </>
  );
};

export default CreatorsPage;
