import styled from "styled-components";

export const StyledCard = styled.div`
  background: linear-gradient(
    to top,
    rgba(189, 165, 140, 0.6) 30%,
    /* marrom claro suave */ rgba(230, 223, 215, 0.9) 70% /* bege claro suave */
  );

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 1.5rem;

  width: 30%;
  min-width: 384px;
  max-width: 380px;
  height: 533px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  color: rgba(12, 4, 33, 1);
  font-family: "KronaOne", sans-serif;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 32px;
  margin-bottom: 1.5rem;
  display: block;
  margin: auto;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #0c0421;
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
