const theme = {
  fonts: ["Canela", "Everett"],
  fontSizes: [12, 14, 16, 18, 24, 26, 32, 42, 44, 74, 80, 100],
  lineHeights: ["110%", "115%", "130%", "135%", "140%"],
  letterSpacings: ["-0.01em", "-0.02em", "-0.03em", "0.1em"],
  fontWeights: ["normal", 600],
  colors: {
    charcoal: "#141414",
    charcoalTints: [
      "#2b2b2b",
      "#434343",
      "#5a5a5a",
      "#717171",
      "#888888",
      "#a0a0a0",
      "#b7b7b7",
      "#cecece",
      "#e5e5e5",
      "#fdfdfd",
    ],
    white: "#ffffff",
    background: "#f6f6f6",
    border: "#d4d4d8",
    stone: "#d8cec4",
    stoneTints: [
      "#6d635a",
      "#7d7268",
      "#8c8277",
      "#9a9187",
      "#a9a096",
      "#b8b0a6",
      "#c7bfb5",
      "#d6cec5",
      "#ece6df",
    ],
    concrete: "#b1aba6",
    concreteTints: [
      "#7e7772",
      "#89827c",
      "#938c87",
      "#9d9691",
      "#a6a19c",
      "#b0aba7",
      "#c4c0bc",
      "#d8d4d1",
      "#ebe9e7",
      "#fefdfd",
    ],
    taupe: "#a19082",
    taupeTints: [
      "#5e4f42",
      "#6f5c4c",
      "#79695b",
      "#867668",
      "#928376",
      "#9e9084",
      "#b8aba0",
      "#d1c6bd",
      "#e8e1dc",
      "#fdfdfc",
    ],
    warm: "#f5eee8",
    cold: "#edece8",
    greys: ["#1c1c1c", "#2d2d2d", "#5c5c5c", "#8b8b8b", "#bbbbbb", "#f6f6f6"],
    secondary: "#746E68",
    info: "#3683ef",
    success: "#cef564",
    warning: "#ffb442",
    danger: "#ff4731",
    system: "#ffe417",
  },
  shadows: {
    default:
      "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
  },
  breakpoints: [
    "375px",
    "600px",
    "768px",
    "1024px",
    "1100px",
    "1200px",
    "1440px",
    "1660px",
    "1920px",
  ],
  mediaQueries: {
    xxSmall: `@media screen and (min-width: 375px)`,
    xSmall: `@media screen and (min-width: 600px)`,
    small: `@media screen and (min-width: 768px)`,
    medium: `@media screen and (min-width: 1024px)`,
    xMedium: `@media screen and (min-width: 1100px)`,
    xxMedium: `@media screen and (min-width: 1200px)`,
    large: `@media screen and (min-width: 1440px)`,
    xLarge: `@media screen and (min-width: 1660px)`,
    xxLarge: `@media screen and (min-width: 1920px)`,
  },
  mediaQueriesMaxWidth: {
    xxSmall: `@media screen and (max-width: 375px)`,
    xSmall: `@media screen and (max-width: 600px)`,
    small: `@media screen and (max-width: 768px)`,
    medium: `@media screen and (max-width: 1024px)`,
    xMedium: `@media screen and (max-width: 1100px)`,
    xxMedium: `@media screen and (max-width: 1200px)`,
    large: `@media screen and (max-width: 1440px)`,
    xLarge: `@media screen and (max-width: 1660px)`,
    xxLarge: `@media screen and (max-width: 1920px)`,
  },
};

export default theme;
