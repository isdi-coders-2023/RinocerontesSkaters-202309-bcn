import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage copmonent", () => {
  describe("When it receives a Characters text", () => {
    test("Then it should show it on a heading", () => {
      const expectedText = "Characters";

      render(<HomePage />);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
