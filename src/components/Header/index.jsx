import styled from "styled-components";
import NavBar from "../NavBar";

const StyledHeader = styled.header`
  background-color: #c8e1f5;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  gap: 30px;

  img {
    height: 88px;
    width: auto;
    object-fit: contain;
  }

  .divider {
    width: 100%;
    border-bottom: 1px solid #0c0421;
    width: 80%;
  }

  @media (max-width: 768px) {
    img {
      height: 90px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 70px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <img src="/logo.png" alt="Logo do Calmaria Spa" />
    <div className="divider" />
    <NavBar />
  </StyledHeader>
);

export default Header;
