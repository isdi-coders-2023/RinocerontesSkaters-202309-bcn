import CharacterStructure from "../../features/characters/types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { image, name },
}: CharacterProps): React.ReactElement => {
  return (
    <CharacterCardStyled>
      <div className="character-card">
        <img
          className="character-card__image"
          src={image}
          alt={name}
          width="300"
          height="470"
        />
        <h2 className="character-card__title">{name}</h2>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
