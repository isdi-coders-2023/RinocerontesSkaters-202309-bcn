import CharacterStructure from "../types";

interface CharactersContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
}

export default CharactersContextStructure;
