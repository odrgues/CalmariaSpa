import styled from "styled-components";

export const CreatorsWrapper = styled.main`
  min-height: 85vh;
  padding: 6rem 8%;
  background: linear-gradient(to top, #dbd6d3, #ffffff);
  color: #333;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

export const CreatorsTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: 3rem;
  color: #0c0421; /* Cor primária escura */
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// 3. Container para a Seção Funcional (Links/Downloads)
export const FunctionalContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto 0 auto;
  padding: 30px 0;
  border-top: 2px solid #e8f5c8; /* Linha de separação suave */

  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    font-family: "KronaOne", sans-serif;
    font-size: 1.5rem;
    color: #0c0421;
    text-align: center;
    margin-bottom: 10px;
  }
`;

// 4. Card de Ação (Links + Download)
export const CreatorActionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h4 {
    font-family: "KronaOne", sans-serif;
    font-size: 1.2rem;
    color: #4e75ff; /* Cor de destaque azul */
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
    padding: 20px;

    h4 {
      width: 100%;
    }
  }
`;

// 5. Wrapper para os Ícones Sociais
export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

// 6. Estilo do Link Social (Ícone)
export const SocialLink = styled.a`
  color: #0c0421;
  font-size: 1.8rem;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #4e75ff;
  }
`;

// 7. Botão de Download (Estilo de Botão)
export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #4e75ff; /* Cor de destaque azul */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;
  font-size: 0.95rem;

  &:hover {
    background-color: #0c0421; /* Cor escura no hover */
  }
`;
