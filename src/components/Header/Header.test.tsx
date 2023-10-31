import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text in the HTML file", () => {
      render(<Header />, { wrapper: BrowserRouter });

      const imageElement = screen.getByAltText("Logo of Better call Lau");

      expect(imageElement).toBeInTheDocument();
    });
  });
});
