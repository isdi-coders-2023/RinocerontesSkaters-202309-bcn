import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says Home icon", () => {
      const expectedAltText = "Home icon";

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Navigation />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const navigationAltText = screen.getByAltText(expectedAltText);

      expect(navigationAltText).toBeInTheDocument();
    });
  });

  test("Then it should show an image with an alternative text: Create icon", () => {
    const expectedAltText = "Create icon";

    render(
      <ThemeProvider theme={mainTheme}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ThemeProvider>,
    );

    const navigationAltText = screen.getByAltText(expectedAltText);

    expect(navigationAltText).toBeInTheDocument();
  });

  describe("When it is rendered andwe are at path `/home`", () => {
    test("Then it should show the class `container-list__active`", () => {
      const expectedAltText = "Home icon";
      const expectedClassName = "container-list__active";

      render(
        <MemoryRouter initialEntries={[{ pathname: "/home" }]}>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const navigationAltText = screen.getByAltText(expectedAltText);

      expect(navigationAltText).toHaveClass(expectedClassName);
    });
  });
});
