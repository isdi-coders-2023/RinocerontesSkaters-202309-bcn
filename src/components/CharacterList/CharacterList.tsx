import { useContext, useEffect } from "react";
import CharactersContext from "../../features/characters/store/CharactersContext";
import useCharactersApi from "../../hooks/characterApi";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterListStyled from "./CharacterListStyled";

const CharacterList = () => {
  const { characters, loadCharacters } = useContext(CharactersContext);
  const { getCharacters } = useCharactersApi();

  useEffect(() => {
    (async () => {
      loadCharacters(await getCharacters());
    })();
  }, [loadCharacters, getCharacters]);

  return (
    <CharacterListStyled title="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </CharacterListStyled>
  );
};

export default CharacterList;
