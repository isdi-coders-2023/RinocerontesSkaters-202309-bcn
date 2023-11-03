import { render, screen } from "@testing-library/react";
import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";
import mainTheme from "../../styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import CharacterList from "./CharacterList";

describe("Given a CharacterList", () => {
  describe("When it is called with a list of 2 characters", () => {
    test("Then it should show a list of 2 characters", () => {
      const expectedTitle = "character-list";

      render(
        <ThemeProvider theme={mainTheme}>
          <CharactersProviderWrapper>
            <MemoryRouter>
              <CharacterList />
            </MemoryRouter>
          </CharactersProviderWrapper>
        </ThemeProvider>,
      );

      const characterList = screen.getByTitle(expectedTitle);

      expect(characterList).toBeInTheDocument();
    });
  });
});
