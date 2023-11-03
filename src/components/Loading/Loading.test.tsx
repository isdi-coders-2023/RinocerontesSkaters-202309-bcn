import { screen } from "@testing-library/dom";
import Loading from "./Loading";
import { render } from "@testing-library/react";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a gavel gif loader", async () => {
      const altText = "Gavel hitting the sound block.";

      render(<Loading />);
      const expectedAltText = await screen.findByAltText(altText);

      expect(expectedAltText).toBeInTheDocument();
    });
  });
});
