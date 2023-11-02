import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'Logo of Better call Lau'", () => {
      const expectedText = "Logo of Better call Lau";

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const imageElement = screen.getByAltText(expectedText);
      expect(imageElement).toBeInTheDocument();
    });
  });
});
