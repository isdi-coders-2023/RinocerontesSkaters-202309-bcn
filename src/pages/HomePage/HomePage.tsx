import CharacterList from "../../components/CharacterList/CharacterList";

const HomePage = () => {
  return (
    <>
      <h1 className="character-title">Characters</h1>
      <div className="character-list-container">
        <CharacterList />
      </div>
    </>
  );
};

export default HomePage;
