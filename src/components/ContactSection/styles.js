import styled, { css, keyframes } from "styled-components";

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  justify-content: center
  width: 20%:
  align-items: center;
  min-height: 100vh;
 

  @media (max-width: 768px) {
    padding: 4rem 5%;
    min-height: auto;

  }

`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 45%;
  max-width: 589px;
  animation: ${imageIn} 1s ease-out;

  @media (max-width: 1024px) {
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
`;

export const FormContainer = styled.div`
  background: linear-gradient(to bottom, #fff3b3 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  flex-grow: 1;
  max-width: 583px;
  height: 815.9969482421875px;
  animation: ${formIn} 1s ease-out 0.2s;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    padding: 2.5rem 1.5rem;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
export const Title = styled.h2`
  font-size: 31px;
  color: #777c6d;
  font-family: "KronaOne", sans-serif;
  margin-bottom: 0.5rem;
  text-align: center;
`;
export const Subtitle = styled.p`
  font-size: 22px;
  color: #452829;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #452829;
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
`;

const FormFieldStyle = css`
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 30px;
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
  font-size: 0.95rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  margin-top: 2rem;

  color: ${(props) => (props.$isError ? "#ff4e4e" : "#4e75ff")};
`;
