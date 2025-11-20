import styled, { css } from "styled-components";

export const StyledSubscriptionBanner = styled.section`
  background: linear-gradient(to bottom, #dbd6d3, #ffffff);
  position: relative;
  overflow: hidden;
  height: 320px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 1rem;
    height: auto;
    padding-bottom: 2rem;
  }
`;
export const Title = styled.h1`
  font-size: 31px;
  color: #452829;
  font-family: "KronaOne", sans-serif;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;
export const Subtitle = styled.h2`
  font-size: 22px;
  color: rgba(12, 4, 33, 1);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin-bottom: 0.75rem;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  height: 65px;
  margin-top: 1.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const Input = styled.input`
  width: 80%;
  max-width: 1102px;
  border: none;
  border-radius: 30px 0px 0px 30px;
  outline: none;

  padding: 10px 20px;
  font-size: 16px;
`;
export const Message = styled.p`
  font-size: 22px;
  color: ${(props) => (props.$isError ? "#ff4e4e" : "#4e75ff")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`;

export const Icon = styled.img`
  position: static;
  width: 587px;
  max-width: 100%;
  height: auto;
`;

// export const DecorImage = styled.img`
//   position: absolute;
//   top: 275%;
//   transform: translateY(-50%);
//   width: 150px;
//   height: auto;
//   opacity: 0.8;

//   ${(props) =>
//     props.$rightSide &&
//     css`
//       left: auto;
//       right: 0;
//       transform: translateY(-50%) rotateY(180deg);
//     `}

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;
