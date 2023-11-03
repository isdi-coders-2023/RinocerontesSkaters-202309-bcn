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
      <div className="card">
        <img
          className="card__image"
          src={image}
          alt={`Character ${name} portrait`}
          width="300"
          height="470"
        />
        <h2 className="card__title">{name}</h2>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
