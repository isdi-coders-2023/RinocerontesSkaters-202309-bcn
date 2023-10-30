import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
    };

    typography: {
      main: string;
      secondary: string;
    };
  }
}
