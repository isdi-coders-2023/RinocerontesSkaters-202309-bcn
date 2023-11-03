import useCharactersApi from "./useCharacterApi";
import { renderHook } from "@testing-library/react";
import charactersMock from "../mocks/charactersMock";

describe("Given a custom hook useCharacterApi", () => {
  describe("When it fetches the informacion of two characters", () => {
    test("Then it should return the information of Jimmy McGill and Michael Ehrmantraut character", async () => {
      const expectedCharacters = charactersMock;

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharactersApi());

      const currentCharacters = await getCharacters();

      expect(currentCharacters).toStrictEqual(expectedCharacters);
    });
  });
});
