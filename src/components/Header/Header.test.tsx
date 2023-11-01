import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
  describe("When the project's App.tsx file renders its content", () => {
    test("Then it should show in the HTML file", () => {
      const imageElement = screen.getByAltText("Logo of Better call Lau");

      expect(imageElement).toBeInTheDocument();
    });
  });
});
