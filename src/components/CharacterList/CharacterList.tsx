import CharactersContext from "../../features/characters/store/CharactersContext";
import { useContext, useEffect } from "react";
import { charactersMock } from "../../mocks/charactersMock";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);

  useEffect(() => {
    loadCharacters(charactersMock);
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
