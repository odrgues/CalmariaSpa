const colors = {
  primary: "#452829",
  secondary: "#777c6d",
  accent: "#777c6d",

  text_primary: "rgb(12, 4, 33, 1 )",
  text_secondary: "#0c0421",
  text_muted: "#5d667a",

  label: "#452829",
  button: "#957c62",
  white: "#fff",
  span: " #7b5e57",
};

const spacing = {
  xs: "clamp(4px, 0.5vw, 8px)",
  sm: "clamp(8px, 1vw, 12px)",
  md: "clamp(16px, 2vw, 20px)",
  lg: "clamp(24px, 3vw, 32px)",
  xl: "clamp(32px, 4vw, 48px)",
  xxl: "clamp(48px, 6vw, 72px)",

  gapSm: "clamp(1rem, 2vw, 1.5rem)",
  gapMd: "clamp(2rem, 3vw, 3rem)",
  gapLg: "clamp(3rem, 4vw, 4rem)",
};

const radii = {
  sm: "6px",
  md: "12px",
  lg: "20px",
  pill: "50px",
};

const shadows = {
  soft: "0 4px 12px rgba(0,0,0,0.08)",
  medium: "0 8px 20px rgba(0,0,0,0.1)",
};

const fontSizes = {
  base: "clamp(14px, 2.5vw, 16px)",
  sm: "clamp(12px, 2vw, 14px)",
  md: "clamp(16px, 2.8vw, 18px)",
  lg: "clamp(18px, 3.5vw, 20px)",
  xl: "clamp(22px, 4vw, 26px)",
  h1: "clamp(1.6rem, 6vw, 2.6rem)",
  h2: "clamp(1.5rem, 5vw, 2rem)",
  h3: "clamp(1.3rem, 4vw, 1.8rem)",
};

const gradients = {
  brownTop: `
    linear-gradient(
      to top,
      #DBD6D3,
      #FFFFFF
    )
  `,

  brownBottom: `
    linear-gradient(
      to bottom,
      #DBD6D3,
      #FFFFFF
    )
  `,

  yellowContact: `
    linear-gradient(
      to bottom,
      #fff3b3 0%,
      #ffffff 100%
    )
  `,

  card: `
    linear-gradient(
      to bottom,
      rgba(245, 240, 235, 0.95) 30%,
      rgba(220, 215, 210, 0.8) 100%
    )
  `,
};

const theme = {
  colors,
  spacing,
  radii,
  shadows,
  fontSizes,
  gradients,
};

export default theme;
