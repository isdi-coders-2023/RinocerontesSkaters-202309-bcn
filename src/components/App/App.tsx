import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { useEffect } from "react";
import useCharactersApi from "../../hooks/characterApi";

const App = (): React.ReactElement => {
  const { getCharacters } = useCharactersApi();

  useEffect(() => {
    (async () => {
      await getCharacters();
    })();
  }, [getCharacters]);

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
