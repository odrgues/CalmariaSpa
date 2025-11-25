import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles";

const formIn = keyframes`
 from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const imageIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.gapMd};
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacing.gapMd};
  margin-top: ${theme.spacing.gapMd};
  padding: 0 ${theme.spacing.md};

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: ${theme.spacing.gapMd};
    align-items: stretch;
    padding: 0;
  }
`;

export const ContactContainer = styled.section`
  display: block;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: ${theme.spacing.lg} 5%;
  min-height: auto;

  @media (min-width: 1024px) {
    width: 20%;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  align-self: stretch;
  margin: 0 auto;
  animation: ${imageIn} 1s ease-out;

  @media (min-width: 1024px) {
    width: 45%;
    max-width: 589px;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const FormContainer = styled.div`
  background: ${theme.gradients.yellowContact};
  border-radius: ${theme.radii.lg};
  padding: clamp(1rem, 3vw, 2.25rem) clamp(1rem, 2vw, 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  animation: ${formIn} 1s ease-out 0.2s;
  margin-top: ${theme.spacing.gapMd};
  margin-bottom: ${theme.spacing.gapMd};

  @media (min-width: 1024px) {
    max-width: 583px;
    flex-grow: 1;
    margin-top: 0;
    margin-bottom: 0;
    align-self: stretch;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.h2};
  color: ${theme.colors.title_contact};
  font-family: "KronaOne", sans-serif;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.title_banner};
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.md};
  font-weight: bold;
  color: ${theme.colors.title_banner};
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
`;

const FormFieldStyle = css`
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: ${theme.radii.pill};
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
`;

export const Input = styled.input`
  ${FormFieldStyle}
  height: 48px;
`;

export const TextArea = styled.textarea`
  ${FormFieldStyle}
  resize: none;
  min-height: 120px;
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.md};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
  margin-top: 2rem;

  color: ${(props) => (props.$isError ? "#ff4e4e" : "#4e75ff")};
`;
