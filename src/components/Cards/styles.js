import styled from "styled-components";
import { theme } from "../../styles";

export const StyledCard = styled.div`
  background: ${theme.gradients.card};
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.soft};
  padding: 2.5rem 1.5rem;

  width: 100%;
  min-width: 260px;
  max-width: clamp(260px, 90vw, 380px);
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.medium};
  }
`;

export const CardTitle = styled.h1`
  font-size: ${theme.fontSizes.h3};
  color: ${theme.colors.text};
  font-family: "Playfair Display", serif;
  font-weight: 600;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text_cards};
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  padding: 0 0.5rem;
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.sm};
  }
`;
