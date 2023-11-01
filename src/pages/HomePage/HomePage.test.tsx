import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("Given a Home page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Characters'", () => {
      const headingText = "Characters";

      render(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
