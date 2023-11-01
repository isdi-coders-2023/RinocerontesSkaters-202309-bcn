import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given the App component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
  describe("When it receives an image with alt property `Logo of Better call Lau`", () => {
    test("Then it should show a logo with the same alt property", () => {
      const expectedText = "Logo of Better call Lau";

      const headderLogoAccesibility = screen.getByAltText(expectedText);

      expect(headderLogoAccesibility).toBeInTheDocument();
    });
  });
});
