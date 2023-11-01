import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
      light: string;
      dark: string;
    };
    typography: {
      main: string;
      secondary: string;
      titleSize: string;
      inputSize: string;
      descriptionSize: string;
      feedbackSize: string;
    };
  }
}
