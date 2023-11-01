import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Home page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Characters'", () => {
      const headingText = "Characters";

      render(
        <ThemeProvider theme={mainTheme}>
          <HomePage />
        </ThemeProvider>,
      );

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
