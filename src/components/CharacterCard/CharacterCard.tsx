import CharacterStructure from "../../features/characters/types";

interface CharacterProps {
  character: CharacterStructure;
}

const CharacterCard = ({
  character: { img, name },
}: CharacterProps): React.ReactElement => {
  return (
    <article className="card">
      <div className="">
        <img
          className="card__image"
          src={img}
          alt={name}
          width="300"
          height="470"
        />
        <h2>{name}</h2>
      </div>
    </article>
  );
};

export default CharacterCard;
