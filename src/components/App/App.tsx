import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { useContext } from "react";
import UiContext from "../../features/ui/store/UiContext";
import Loading from "../Loading/Loading";

const App = (): React.ReactElement => {
  const { isLoading } = useContext(UiContext);

  return (
    <div className="container">
      {isLoading && <Loading />}
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
