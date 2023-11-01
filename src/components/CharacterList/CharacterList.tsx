import { characters } from "../../mocks/charactersMock";

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
