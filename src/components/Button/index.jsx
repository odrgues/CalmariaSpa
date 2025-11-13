import styled from "styled-components";

const Button = styled.button`
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

  box-shadow: 0 4px 12px rgba(78, 117, 255, 0.4);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export default Button;
