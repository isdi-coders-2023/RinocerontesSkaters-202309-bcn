import { useContext, useEffect } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import useCharactersApi from "../../hooks/characterApi";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);
  const { getCharacters } = useCharactersApi();

  useEffect(() => {
    (async () => {
      loadCharacters(await getCharacters());
    })();
  }, [loadCharacters, getCharacters]);

  return (
    <ul className="character-list" title="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
