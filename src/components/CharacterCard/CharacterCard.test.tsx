import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import CharacterCard from "./CharacterCard";
import { character } from "../../data/character";

describe("Given the component CharacterCard", () => {
  describe("When it received a character name", () => {
    test("Then it should show the name of the character: Jimmy Mccgill", () => {
      const saulName = character;

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <CharacterCard character={saulName} />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const characterName = screen.getByRole("heading", {
        name: saulName.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });

  describe("When it received a character image", () => {
    test("Then it should show an image with an alternative text: the name of the character", () => {
      const expectedAlt = character;

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <CharacterCard character={expectedAlt} />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const characterImageUrl = screen.getByAltText(expectedAlt.name);

      expect(characterImageUrl).toBeInTheDocument();
    });
  });
});
