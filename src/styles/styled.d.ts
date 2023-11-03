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
      lighter: string;
      sky: string;
      dark: string;
      lightGrey: string;
      lighterGrey: string;
      darkGrey: string;
      yellow: string;
      shadow: string;
      darkShadow: string;
      darkStrong: string;
    };

    typography: {
      main: string;
      secondary: string;
      titleSize: string;
      nameSize: string;
      inputSize: string;
      descriptionSize: string;
      feedbackSize: string;
    };
  }
}
