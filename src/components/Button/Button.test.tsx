import { render, screen } from "@testing-library/react";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Modify";
  const actionOnTap = vi.fn();

  describe("When it receives a text 'Modify'", () => {
    test("Then it should show a button with 'Modify' inside", async () => {
      render(
        <Button
          modifier=""
          type="button"
          text={text}
          actionOnTap={actionOnTap}
        />,
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
