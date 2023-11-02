import { useContext, useMemo } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import useCharactersApi from "../../hooks/characterApi";
import CharacterCard from "../CharacterCard/CharacterCard";

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
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
