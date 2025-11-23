import { CreatorsData } from "../../data/creatorsData";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import {
  CreatorsWrapper,
  CreatorsTitle,
  FunctionalContainer, // NOVO
  CreatorActionCard, // NOVO
  SocialLinksWrapper, // NOVO
  SocialLink, // NOVO
  DownloadButton, // NOVO
} from "./styles";

const CreatorsPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <CreatorsWrapper>
        <CreatorsTitle>{CreatorsData.title}</CreatorsTitle>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: CreatorsData.narrative }} />
        </div>

        {/* 2. SEÇÃO FUNCIONAL (LINKS E DOWNLOADS) */}
        <FunctionalContainer>
          <h3>Conecte-se e Baixe Nossos Currículos</h3>

          {CreatorsData.functionalLinks.map((creator) => (
            <CreatorActionCard key={creator.id}>
              <h4>{creator.name}</h4>

              <SocialLinksWrapper>
                {/* Link do LinkedIn */}
                <SocialLink
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </SocialLink>

                {/* Link do GitHub */}
                <SocialLink
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </SocialLink>
              </SocialLinksWrapper>

              {/* Botão de Download */}
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
