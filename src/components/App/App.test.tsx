import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given the App component", () => {
  describe("When it receives an image with alt property `Logo of Better call Lau`", () => {
    test("Then it should show a logo with the same alt property", () => {
      const expectedText = "Logo of Better call Lau";

      render(
        <ThemeProvider theme={mainTheme}>
          <CharactersProviderWrapper>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CharactersProviderWrapper>
        </ThemeProvider>,
      );

      const headderLogoAccesibility = screen.getByAltText(expectedText);

      expect(headderLogoAccesibility).toBeInTheDocument();
    });
  });
});
