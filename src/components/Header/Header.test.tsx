import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When the project's App.tsx file renders its content", () => {
    test("Then it should show in the HTML file", () => {
      render(<Header />);

      const headerElement = document.querySelector("header");
      const imageElement = screen.getByAltText("Logo of Better call Lau");

      expect(headerElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    });
  });
});
