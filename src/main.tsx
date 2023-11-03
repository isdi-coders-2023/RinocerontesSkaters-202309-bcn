import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import CharactersProviderWrapper from "./features/characters/store/CharactersProviderWrapper";
import UiContextWrapper from "./features/ui/store/UiContextWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextWrapper>
      <CharactersProviderWrapper>
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CharactersProviderWrapper>
    </UiContextWrapper>
  </React.StrictMode>,
);
