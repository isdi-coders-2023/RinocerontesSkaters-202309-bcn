import CharactersContext from "../../features/characters/store/CharactersContext";
import { useContext, useEffect } from "react";
import { charactersMock } from "../../mocks/CharactersMock";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    loadCharacters(charactersMock);
  }, [loadCharacters]);

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}>
          {character.appearance}
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
