import AppStyled from "./AppStyled";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <AppStyled className="container">
      <img
        src="/images/logo.webp"
        alt="Logo of Better call Lau"
        className="logo"
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
