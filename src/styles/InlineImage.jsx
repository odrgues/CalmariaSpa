import styled, { css } from "styled-components";
import theme from "../styles/theme";

const StyledInlineImage = styled.img`
  width: clamp(180px, 32vw, 340px);
  height: auto;
  border-radius: ${theme.radii.sm};
  margin-bottom: ${theme.spacing.md};
  display: block;

  ${(props) =>
    props.$side === "left"
      ? css`
          float: left;
          margin: 0 ${theme.spacing.md} ${theme.spacing.md} 0;
        `
      : css`
          float: right;
          margin: 0 0 ${theme.spacing.md} ${theme.spacing.md};
        `}

  @media (max-width: 768px) {
    float: none;
    margin: ${theme.spacing.md} auto;
    width: 100%;
  }
`;

const InlineImage = ({ src, alt = "", side = "right" }) => {
  return <StyledInlineImage src={src} alt={alt} $side={side} />;
};

export default InlineImage;
