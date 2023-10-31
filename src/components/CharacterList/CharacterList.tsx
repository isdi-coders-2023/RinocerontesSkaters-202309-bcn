import { useContext } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";

const CharacterList = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <ul>
      {characters.map(() => (
        <li className="character-card-container"></li>
      ))}
    </ul>
  );
};

export default CharacterList;
