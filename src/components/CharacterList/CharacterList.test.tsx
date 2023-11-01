import { render, screen } from "@testing-library/react";
import CharacterList from "./CharacterList";

import CharactersProviderWrapper from "../../features/characters/store/CharactersProviderWrapper";

describe("Given a CharacterList", () => {
  describe("When it is called with a list of 2 characters", () => {
    test("Then it should show a list of 2 characters", () => {
      const numberOfCharacters = 2;

      render(
        <CharactersProviderWrapper>
          <CharacterList />
        </CharactersProviderWrapper>,
      );

      const list = screen.getByRole("list");
      const listItem = screen.getAllByRole("listitem");

      expect(list).toBeInTheDocument();
      expect(listItem.length).toBe(numberOfCharacters);
    });
  });
});
