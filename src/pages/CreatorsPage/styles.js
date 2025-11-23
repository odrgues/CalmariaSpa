import styled from "styled-components";

export const CreatorsWrapper = styled.main`
  min-height: 85vh;
  padding: 6rem 8%;
  color: #5d667a;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

export const CreatorsTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: 3rem;
  color: #452829;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const FunctionalContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto 0 auto;
  padding: 30px 0;
  border-top: #452829 2px solid;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    font-family: "KronaOne", sans-serif;
    font-size: 1.5rem;
    color: #1a2a53;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const CreatorActionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: linear-gradient(
    to bottom,
    rgba(245, 240, 235, 0.95) 30%,
    rgba(220, 215, 210, 0.8) 100%
  );
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h4 {
    font-family: "KronaOne", sans-serif;
    font-size: 1.2rem;
    color: #1a2a53;
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

export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: #0c0421;
  font-size: 1.8rem;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #957c62;
  }
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #957c62;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: background-color 0.3s;
  font-size: 0.95rem;

  &:hover {
    background-color: #0c0421;
  }
`;
