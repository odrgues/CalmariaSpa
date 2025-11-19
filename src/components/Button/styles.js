import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4e75ff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  width: 280px;
  height: 66px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;

  box-shadow: 0 4px 12px rgba(78, 117, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(78, 117, 255, 0.6);
  }

  ${(props) =>
    props.$formStyle &&
    css`

      margin-left: 0;
      height: 100%;
      flex-shrink: 0;
      width: 150px; 
      border-radius: 0px 30px 30px 0px;

      border: 1px solid #4e75ff;
      border-left: none;

      font-size: 18px;

      &:hover {
        transform: none;
        box-shadow: none;
        background-color: #3f60d6; 

      @media (max-width: 768px) {
        width: 120px;
        font-size: 16px;
      }
    `}
`;
