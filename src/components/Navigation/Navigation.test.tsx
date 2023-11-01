import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
  });
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says Home icon", () => {
      const expectedText = "Home icon";

      const navigation = screen.getByAltText(expectedText);

      expect(navigation).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says Create icon", () => {
      const expectedText = "Create icon";

      const navigation = screen.getByAltText(expectedText);

      expect(navigation).toBeInTheDocument();
    });
  });
});
