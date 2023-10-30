import { DefaultTheme } from "styled-components";
import "@fontsource/playfair-display";
import "@fontsource/karla";

const mainTheme: DefaultTheme = {
  colors: {
    background: "#307e80",
    primary: "#234442",
    secondary: "#848d6b",
    tertiary: "765846",
    accent: "c1b585",
    light: "f6f5f5",
    dark: "100f0f",
  },
  typography: {
    main: "Playfair Display",
    secondary: "Karla",
    title_size: "3.125rem",
    input_size: "1.25rem",
    description_size: "1.375rem",
    feedback_size: "2rem",
  },
};

export default mainTheme;
