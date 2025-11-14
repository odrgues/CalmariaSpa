import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 80vh;
  padding: 6rem 8%;

  background: linear-gradient(to bottom, #e8f5c8 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

export const ServicesTitle = styled.h1`
  font-family: "KronaOne", sans-serif;
  font-size: 3rem;
  color: #4e75ff;
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  justify-items: center;
`;
