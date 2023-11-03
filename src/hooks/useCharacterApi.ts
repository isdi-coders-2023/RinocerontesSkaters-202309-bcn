import CharacterStructure from "../features/characters/types";
import { useCallback, useContext } from "react";
import UiContext from "../features/ui/store/UiContext";

export const useCharactersApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { setIsLoading } = useContext(UiContext);

  const getCharacters = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(`${apiUrl}?_limit=10`);
    const characters = (await response.json()) as CharacterStructure[];

    setIsLoading(false);

    return characters;
  }, [apiUrl, setIsLoading]);

  return { getCharacters };
};

export default useCharactersApi;
