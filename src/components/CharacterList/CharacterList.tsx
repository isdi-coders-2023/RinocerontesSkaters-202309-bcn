import { useContext } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";

const CharacterList = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <ul>
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}></li>
      ))}
    </ul>
  );
};

export default CharacterList;
