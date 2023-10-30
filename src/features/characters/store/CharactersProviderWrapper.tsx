import { useState, useCallback, PropsWithChildren } from "react";
import CharacterStructure from "../types";
import CharactersContext from "./CharactersContext";

const CharactersProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loadCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProviderWrapper;
