import CharacterStructure from "../../features/characters/types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { img, name },
}: CharacterProps): React.ReactElement => {
  return (
    <article className="card">
      <div className="card__article">
        <img
          className="card__image"
          src={img}
          alt={name}
          width="700"
          height="350"
        />
        <ul className="card__info">
          <li></li>
        </ul>
      </div>
    </article>
  );
};

export default Character;
