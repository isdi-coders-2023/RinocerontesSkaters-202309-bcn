import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyles";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import CharactersProviderWrapper from "./features/characters/store/CharactersProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharactersProviderWrapper>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CharactersProviderWrapper>
  </React.StrictMode>,
);
