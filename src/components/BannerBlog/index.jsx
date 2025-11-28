import { BannerBase } from "../../styles/BannerBase";
import blogBanner from "../../assets/blog-banner.jpg";
import styled from "styled-components";
import theme from "../../styles/theme";

const BannerStyled = styled(BannerBase)`
  background-image: url(${blogBanner});
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.h1};
  font-weight: 700;
  text-align: center;
  max-width: 900px;
  padding: 0 1rem;
  line-height: 1.2;
`;

const BannerBlog = () => {
  return (
    <BannerStyled>
      <BlogTitle>Blog do Calmaria: Seu Guia de Bem-Estar</BlogTitle>
    </BannerStyled>
  );
};

export default BannerBlog;
