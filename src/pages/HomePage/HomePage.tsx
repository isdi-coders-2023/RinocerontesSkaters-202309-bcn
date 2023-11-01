import CharacterList from "../../components/CharacterList/CharacterList";
import StyledHomePage from "./HomePageStyled";

const HomePage = () => {
  return (
    <StyledHomePage>
      <h1 className="character-title">Characters</h1>
      <CharacterList />
    </StyledHomePage>
  );
};

export default HomePage;
