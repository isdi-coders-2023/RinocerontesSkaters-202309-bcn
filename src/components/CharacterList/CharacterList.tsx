import { useContext, useMemo } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import useCharactersApi from "../../hooks/characterApi";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);
  const { getCharacters } = useCharactersApi();

  useMemo(() => {
    (async () => {
      loadCharacters(await getCharacters());
    })();
  }, [loadCharacters, getCharacters]);

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}>
          {character.birthday}
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
