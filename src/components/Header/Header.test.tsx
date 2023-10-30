import { render } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When the project's App.tsx file renders its content", () => {
    test("Then it should print a <header></header> with a <img />", () => {
      const headerElement = document.querySelector(".main-header");

      render(<Header />);

      expect(headerElement).toBeInTheDocument();
    });
  });
});
