import CharactersContext from "../../features/characters/store/CharactersContext";
import { useContext, useEffect } from "react";
import { characters } from "../../data/characters";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const { loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    loadCharacters(characters);
  }, [loadCharacters]);

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
