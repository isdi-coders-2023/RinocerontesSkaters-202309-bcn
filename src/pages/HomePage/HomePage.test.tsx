import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import UiContextWrapper from "../../features/ui/store/UiContextWrapper";

describe("Given a Home page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Characters'", () => {
      const headingText = "Characters";

      render(
        <UiContextWrapper>
          <CharactersProviderWrapper>
            <ThemeProvider theme={mainTheme}>
              <HomePage />
            </ThemeProvider>
          </CharactersProviderWrapper>
        </UiContextWrapper>,
      );

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
