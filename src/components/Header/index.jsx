import React from "react";
import styled from "styled-components";
import headerImage from "../../assets/header-image.jpg";
import logoImage from "../../../public/logo.png";
import { BannerBase } from "../../styles/BannerBase";
import media from "../../styles/breakpoints";

const StyledHeader = styled(BannerBase)`
  background-image: url(${headerImage});
  justify-content: center;
  align-items: flex-start;

  img {
    height: 88px;
    width: auto;
    object-fit: contain;
    filter: invert(1) brightness(2);
  }

  ${media.bp768`
    img {
      height: 90px;
    }
  `}

  ${media.bp480`
    padding: 2rem 6%;
    img {
      height: 40px;
    }
  `}
`;

const Header = () => (
  <StyledHeader>
    <img src={logoImage} alt="Logo do Calmaria Spa" />
    <div className="divider" />
  </StyledHeader>
);

export default Header;
