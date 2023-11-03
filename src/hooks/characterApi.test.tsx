import useCharactersApi from "./characterApi";
import { renderHook } from "@testing-library/react";
import charactersMock from "../mocks/charactersMock";

describe("Given a custom hook that intercepts GET requests", () => {
  describe("When it recieves the request of the url ''", () => {
    test("Then it should return te corresponding array of Better Call Lau characters", async () => {
      const expectedArray = charactersMock;

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharactersApi());

      const currentCharacters = await getCharacters();

      expect(currentCharacters).toStrictEqual(expectedArray);
    });
  });
});
