import styled from "styled-components";

export const StyledSubscriptionBanner = styled.section`
  background: linear-gradient(to bottom, #dbd6d3, #ffffff);
  position: relative;
  overflow: hidden;
  height: 320px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    margin-top: 1rem;
    height: auto;
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
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
    font-size: 28px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 1rem;
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
    font-size: 20px;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
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

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 30px;
  }
`;

export const Message = styled.p`
  font-size: 22px;
  color: ${(props) => (props.$isError ? "#ff4e4e" : "#4e75ff")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin: 0.5rem 0 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const Icon = styled.img`
  position: static;
  width: 587px;
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;
