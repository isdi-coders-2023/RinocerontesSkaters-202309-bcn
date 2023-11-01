import CharactersContext from "../../features/characters/store/CharactersContext";
import { useContext, useEffect } from "react";
import { charactersList } from "../../data/charactersList";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    loadCharacters(charactersList);
  }, [loadCharacters]);

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}></li>
      ))}
    </ul>
  );
};

export default CharacterList;
