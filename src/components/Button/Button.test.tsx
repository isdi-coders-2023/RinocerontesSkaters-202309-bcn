import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
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
          <MemoryRouter>
            <Button
              onClick={actionOnClick}
              disabled={false}
              text={text}
              type="submit"
              classModifier=""
            />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a 'disabled' button prop with a value of true", () => {
    test("Then it should render a disabled button", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Button
              onClick={actionOnClick}
              disabled={true}
              text="Modify"
              type="submit"
              classModifier=""
            />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When it receives an 'onClick' handler", () => {
    test("Then it should call the 'onClick' function when clicked", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter>
            <Button
              onClick={actionOnClick}
              disabled={false}
              text={text}
              type="submit"
              classModifier=""
            />
          </MemoryRouter>
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", { name: text });

      fireEvent.click(button);

      expect(actionOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
