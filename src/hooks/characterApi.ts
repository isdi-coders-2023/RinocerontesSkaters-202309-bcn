import CharactersContext from "../features/characters/store/CharactersContext";
import CharacterStructure from "../features/characters/types";
import { useContext, useCallback } from "react";

export const useCharactersApi = () => {
  const { loadCharacters } = useContext(CharactersContext);

  const apiUrl = "https://better-call-lau.onrender.com/characters";

  const getCharacters = useCallback(async () => {
    const response = await fetch(apiUrl);
    const characters = (await response.json()) as CharacterStructure[];

    loadCharacters(characters);
  }, [loadCharacters, apiUrl]);
  return { getCharacters };
};

export default useCharactersApi;
