import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it receives a home icon", () => {
    test("Then it will show it on screen", () => {
      const expectedResult = "/home";

      render(<Navigation />, { wrapper: BrowserRouter });
      const link = screen.getByRole("link");

      expect(link).toHaveAttribute("href", expectedResult);
    });
  });
});
