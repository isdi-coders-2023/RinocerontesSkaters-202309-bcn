import { useState, useCallback, useMemo, PropsWithChildren } from "react";
import CharacterStructure from "../types";
import CharactersContext from "./CharactersContext";

const CharactersProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  const charactersProviderValue = useMemo(
    () => ({ characters, loadCharacters }),
    [characters, loadCharacters],
  );

  return (
    <CharactersContext.Provider value={charactersProviderValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProviderWrapper;
