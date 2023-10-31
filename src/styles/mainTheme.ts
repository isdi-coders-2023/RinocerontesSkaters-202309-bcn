import { DefaultTheme } from "styled-components";
import "@fontsource/playfair-display";
import "@fontsource/karla";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#307e80",
    primary: "#234442",
    secondary: "#848d6b",
    tertiary: "#765846",
    accent: "#c1b585",
    light: "#f6f5f5",
    dark: "#100f0f",
  },
  typography: {
    main: "Playfair Display",
    secondary: "Karla",
    titleSize: "3.125rem",
    inputSize: "1.25rem",
    descriptionSize: "1.375rem",
    feedbackSize: "2rem",
  },
};

export default mainTheme;
