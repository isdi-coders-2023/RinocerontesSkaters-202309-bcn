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
      title_size: string;
      input_size: string;
      description_size: string;
      feedback_size: string;
    };
  }
}
