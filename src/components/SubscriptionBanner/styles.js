import styled, { css } from "styled-components"; // 💡 CORREÇÃO: Adicionar 'css' aqui!

export const StyledSubscriptionBanner = styled.section`
  position: relative;
  overflow: hidden;
  background-color: pink;
`;
export const Title = styled.h1``;
export const Subtitle = styled.h2``;
export const FormContainer = styled.form``;
export const Input = styled.input``;
export const Button = styled.button``;
export const Message = styled.p``;
export const DecorImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  height: auto;
  opacity: 0.8;
  left: 3%;

  ${(props) =>
    props.$rightSide &&
    css`
      left: auto;
      right: 3%;

      transform: translateY(-50%) rotateY(180deg);
    `}

  @media (max-width: 1024px) {
    display: none;
  }
`;
