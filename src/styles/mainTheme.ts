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
    lighter: "#f6f5f5",
    sky: "#58c4f6",
    dark: "#100f0f",
    lightGrey: "#d9d9d9",
    darkGrey: "#bababa",
    yellow: "#fef698",
    shadow: "#0000004f",
  },
  typography: {
    main: "'Playfair Display', sans-serif",
    secondary: "'Karla', sans-serif",
    titleSize: "3.125rem",
    nameSize: "2rem",
    inputSize: "1.25rem",
    descriptionSize: "1.375rem",
    feedbackSize: "2rem",
  },
};

export default mainTheme;
