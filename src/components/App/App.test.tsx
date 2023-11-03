import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import UiContextWrapper from "../../features/ui/store/UiContextWrapper";

describe("Given the App component", () => {
  describe("When it renders on screen ", () => {
    test("Then it should show a logo with the alternative text 'Logo of Better call Lau'", () => {
      const expectedText = "Logo of Better call Lau";

      render(
        <UiContextWrapper>
          <ThemeProvider theme={mainTheme}>
            <CharactersProviderWrapper>
              <MemoryRouter>
                <App />
              </MemoryRouter>
            </CharactersProviderWrapper>
          </ThemeProvider>
        </UiContextWrapper>,
      );

      const headerLogoAccesibility = screen.getByAltText(expectedText);

      expect(headerLogoAccesibility).toBeInTheDocument();
    });
  });
});
