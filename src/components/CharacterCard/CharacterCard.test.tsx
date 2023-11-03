import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import CharacterCard from "./CharacterCard";
import { characterMock } from "../../mocks/characterMock";

describe("Given the component CharacterCard", () => {
  describe("When it received a character name Jimmy Mccgill", () => {
    test("Then it should show the name Jimmy Mccgill", () => {
      const character = characterMock;

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <CharacterCard character={character} />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const characterName = screen.getByRole("heading", {
        name: character.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });

  describe("When it received a character image", () => {
    test("Then it should show an image with an alternative text: Character Jimmy Mccgill portrait", () => {
      const character = characterMock;

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <CharacterCard character={character} />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const characterImageUrl = screen.getByAltText(
        `Character ${characterMock.name} portrait`,
      );

      expect(characterImageUrl).toBeInTheDocument();
    });
  });
});
