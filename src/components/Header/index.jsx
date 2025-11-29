import React from "react";
import styled from "styled-components";
import headerImage from "../../assets/header-image.jpg";
import logoImage from "/logo.png";
import { BannerBase } from "../../styles/BannerBase";

const StyledHeader = styled(BannerBase)`
  background-image: url(${headerImage});
  justify-content: center;
  align-items: flex-start;

  & > img {
    height: 88px;
    width: auto;
    object-fit: contain;
    filter: invert(1) brightness(2);
    display: block;
  }
`;

const Header = () => (
  <StyledHeader>
    <img src={logoImage} alt="Logo do Calmaria Spa" />
  </StyledHeader>
);

export default Header;
