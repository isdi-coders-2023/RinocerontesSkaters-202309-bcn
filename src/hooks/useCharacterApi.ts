import CharacterStructure from "../features/characters/types";
import { useCallback } from "react";

export const useCharactersApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getCharacters = useCallback(async () => {
    const response = await fetch(`${apiUrl}?_limit=10`);
    const characters = (await response.json()) as CharacterStructure[];

    return characters;
  }, [apiUrl]);

  return { getCharacters };
};

export default useCharactersApi;
