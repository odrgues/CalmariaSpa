import styled from "styled-components";
import { theme } from "../../styles";

export const StyledSubscriptionBanner = styled.section`
  background: ${theme.gradients.brownBottom};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(${theme.spacing.sm}, 2vw, ${theme.spacing.md});
  margin-top: ${theme.spacing.gapMd};
  height: auto;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.title_banner};
  font-family: "KronaOne", sans-serif;
  font-weight: 400;
  margin-bottom: -0.3rem;
  text-align: center;
  margin-top: ${theme.spacing.lg};
`;

export const Subtitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: ${theme.spacing.md};
  width: 100%;
  gap: ${theme.spacing.md};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 30px;
  outline: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.fontSizes.base};
  height: clamp(44px, 8vw, 66px);

  @media (min-width: 768px) {
    width: 60%;
    max-width: 1102px;
    border-radius: 30px 0px 0px 30px;
    height: 66px;
    padding: 10px 20px;
  }
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${(props) => (props.$isError ? "#ff4e4e" : "#4e75ff")};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin: ${theme.spacing.sm} 0 0;
  text-align: center;
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${theme.spacing.lg};
`;

export const Icon = styled.img`
  position: static;
  width: clamp(200px, 50vw, 587px);
  max-width: 100%;
  height: auto;
  margin-top: ${theme.spacing.sm};
`;
