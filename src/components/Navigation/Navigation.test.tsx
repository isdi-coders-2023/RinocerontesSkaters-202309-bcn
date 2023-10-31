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
  describe("When it receives an image with alt property Home icon", () => {
    test("Then it should show an image with the same alt property", () => {
      const expectedText = "Home icon";

      const navigation = screen.getByAltText(expectedText);

      expect(navigation).toBeInTheDocument();
    });
  });
});
