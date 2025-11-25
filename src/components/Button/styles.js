import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles";

export const StyledButton = styled(Link)`
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${theme.colors.button};
  border-radius: ${theme.radii.pill};
  border: none;
  cursor: pointer;
  width: clamp(200px, 50vw, 280px);
  height: clamp(44px, 8vw, 66px);
  color: ${theme.colors.white};
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: ${theme.fontSizes.base};

  box-shadow: ${theme.shadows.soft};
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(149, 124, 98, 0.5);
  }

  ${(props) =>
    props.$subscribeStyle &&
    css`
      margin-left: 0;
      height: 50px;
      flex-shrink: 0;
      width: 100%;
      max-width: 150px;
      border-radius: 50px;
      border: 1px solid rgba(149, 124, 98, 0.5);
      font-size: 16px;
      background-color: ${theme.colors.button};
      color: ${theme.colors.white};

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(149, 124, 98, 0.35);
      }

      @media (min-width: 768px) {
        height: 66px;
        width: 150px;
        border-radius: 0px 30px 30px 0;
        font-size: 20px;
      }
    `}

  ${(props) =>
    props.$formStyle &&
    css`
      margin-left: 0;
      height: 48px;
      flex-shrink: 0;
      width: 100%;
      max-width: 250px;
      border-radius: 50px;
      border: 1px solid ${theme.colors.accent};
      font-size: 16px;
      color: ${theme.colors.white};

      &:hover {
        transform: scale(1.03);
        box-shadow: ${theme.shadows.medium};
      }

      @media (min-width: 768px) {
        height: 66px;
        width: 487px;
        font-size: 20px;
      }
    `}

  ${(props) =>
    props.$readMoreStyle &&
    css`
      margin-left: auto;
      margin-right: auto;
      height: 36px;
      width: 100px;
      border-radius: 10px;
      text-decoration: none;
      border: 1px solid ${theme.colors.accent};
      background-color: transparent;
      color: ${theme.colors.accent};
      font-size: 12px;
      font-weight: 600;
      box-shadow: none;
      max-width: none;

      &:hover {
        transform: scale(1.02);
        background-color: ${theme.colors.accent};
        color: ${theme.colors.white};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      @media (min-width: 768px) {
        height: 40px;
        width: 120px;
        font-size: 14px;
      }
    `}
`;
