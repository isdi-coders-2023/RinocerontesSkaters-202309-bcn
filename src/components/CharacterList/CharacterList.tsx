import { characters } from "../../mocks/CharactersMock";

const CharacterList = () => {
  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li className="character-card-container" key={character.id}></li>
      ))}
    </ul>
  );
};

export default CharacterList;
