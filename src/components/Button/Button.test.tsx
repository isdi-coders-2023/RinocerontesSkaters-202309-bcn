import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Modify";
  const actionOnTap = vi.fn();

  describe("When it receives a text 'Modify'", () => {
    test("Then it should show a button with 'Modify' inside", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Button actionOnTap={actionOnTap} disabled={false} text={text} />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a 'disabled' button prop", () => {
    test("Then it should render a disabled button", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Button actionOnTap={actionOnTap} disabled={true} text="Modify" />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
