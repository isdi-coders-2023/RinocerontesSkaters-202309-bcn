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
      render(<Button actionOnTap={actionOnTap} disabled={false} />);

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a 'disabled' prop", () => {
    test("Then it should render a disabled button", () => {
      render(<Button actionOnTap={actionOnTap} disabled={true} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
