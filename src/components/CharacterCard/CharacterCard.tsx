import CharacterStructure from "../../features/characters/types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: {
    img,
    name,
    birthday,
    occupation,
    status,
    appearance,
    firstAppearance,
    lastAppearance,
    nickname,
    portrayed,
  },
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
          <li className="card__item--bold">Name:</li>
          <li className="card__item--lighter">{name}</li>
          <li className="card__item--bold">Birthday:</li>
          <li className="card__item--lighter">{birthday}</li>
          <li className="card__item--bold">Occupation:</li>
          <li className="card__item--lighter">{occupation}</li>
          <li className="card__item--bold">Status:</li>
          <li className="card__item--lighter">{status}</li>
          <li className="card__item--bold">Nickname:</li>
          <li className="card__item--lighter">{nickname}</li>
          <li className="card__item--bold">Appearance:</li>
          <li className="card__item--lighter">{appearance}</li>
          <li className="card__item--bold">First Appearance:</li>
          <li className="card__item--lighter">{firstAppearance}</li>
          <li className="card__item--bold">Last Appearance:</li>
          <li className="card__item--lighter">{lastAppearance}</li>
          <li className="card__item--bold">Portrayed:</li>
          <li className="card__item--lighter">{portrayed}</li>
        </ul>
      </div>
    </article>
  );
};

export default Character;
