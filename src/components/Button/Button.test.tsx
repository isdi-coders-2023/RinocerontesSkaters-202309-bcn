import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Button component", () => {
  const text = "Modify";
  const actionOnClick = vi.fn();

  describe("When it receives a text 'Modify'", () => {
    test("Then it should show a button with the text 'Modify' inside", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Button onClick={actionOnClick} disabled={false} text={text} />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a 'disabled' button prop", () => {
    test("Then it should render a disabled button", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Button onClick={actionOnClick} disabled={true} text="Modify" />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
