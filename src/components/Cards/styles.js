import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  background: linear-gradient(
    to top,
    rgba(202, 212, 250, 0.3) 30%,
    rgba(255, 255, 255, 0.7) 70%
  );
  border: 2px solid #ffffffff;
  border-radius: 32px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  padding: 2.5rem 1.5rem;

  width: 30%;
  min-width: 250px;

  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Illustration = styled.img`
  width: 352px;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem auto;
  transform: translateX(-30px);
  transition: transform 0.3s ease;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  color: rgba(12, 4, 33, 1);
  line-height: 1.6;
  font-family: "Montserrat", sans-serif;
  text-align: left;
`;
