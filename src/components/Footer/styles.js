import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: rgba(232, 245, 200, 1);
  color: rgba(12, 4, 33, 1);
  padding: 2.5rem 5%;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 150px;
    height: auto;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      width: 120px;
      margin-bottom: 1rem;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #a0a0a0;
    margin: 0;
    padding-top: 10px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
