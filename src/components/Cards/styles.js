import styled from "styled-components";

export const StyledCard = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(245, 240, 235, 0.95) 30%,
    rgba(220, 215, 210, 0.8) 100%
  );

  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 3rem 2rem;

  width: 100%;
  min-width: 280px;
  max-width: 420px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    max-width: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h1`
  font-size: 24px;
  color: #1a2a53;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 0.05rem;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 17px;
  color: #5d667a;
  line-height: 1.7;
  font-family: "Montserrat", sans-serif;
  padding: 0 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
