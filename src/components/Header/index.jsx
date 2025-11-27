import styled from "styled-components";
import headerImage from "../../assets/header-image.jpg";

const StyledHeader = styled.header`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 265px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 4%;
  gap: 30px;
  filter: brightness(0.8);

  img {
    height: 88px;
    width: auto;
    object-fit: contain;
    filter: invert(1) brightness(2);
  }

  @media (max-width: 768px) {
    img {
      height: 90px;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 6%;
    img {
      height: 40px;
    }
  }
`;
const Header = () => (
  <StyledHeader>
    <img src="/logo.png" alt="Logo do Calmaria Spa" />
    <div className="divider" />
  </StyledHeader>
);

export default Header;
