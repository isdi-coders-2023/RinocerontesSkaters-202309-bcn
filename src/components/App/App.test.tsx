import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given the App component", () => {
  describe("When it receives an image with alt property `Logo of Better call Lau`", () => {
    test("Then it should show a logo with the same alt property", () => {
      const expectedText = "Logo of Better call Lau";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const headderLogoAccesibility = screen.getByAltText(expectedText);

      expect(headderLogoAccesibility).toBeInTheDocument();
    });
  });
});
