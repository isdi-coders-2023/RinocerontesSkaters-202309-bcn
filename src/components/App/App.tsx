import AppStyled from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <AppStyled className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
