import { css } from "styled-components";

const breakpoints = {
  bp480: 480,
  bp600: 600,
  bp768: 768,
  bp900: 900,
  bp1024: 1024,
  bp1366: 1366,
  bp1440: 1440,
  bp1536: 1536,
  bp1920: 1920,
  bp2560: 2560,
  bp2880: 2880,
};

const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media };
export default media;
