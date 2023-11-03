import useCharactersApi from "./characterApi";
import { renderHook } from "@testing-library/react";

describe("Given a custom hook that intercepts GET requests", () => {
  describe("When it recieves the request of the url ''", () => {
    test("Then it should return te corresponding array of Better Call Lau characters", async () => {
      const expectedArray = [
        {
          id: 1,
          hash: "6367c33e64f544038d8d9582",
          name: "Jimmy McGill",
          birthday: "November 12, 1960",
          occupation: [
            "Mailroom clerk at Hamlin, Hamlin & McGill",
            "Public Defense Attorney",
          ],
          img: "https://static.wikia.nocookie.net/breakingbad/images/8/8e/BCS_S6_Portrait_Jimmy.jpg/revision/latest?cb=20220802210840",
          status: "Alive",
          appearance: [1, 2, 3, 4, 5, 6],
          firstAppearance: "Uno",
          lastAppearance: "Saul Gone",
          nickname: "Saul Goodman",
          portrayed: "Bob Odenkirk",
        },
        {
          id: 2,
          hash: "6367c3c464f544038d8d9586",
          name: "Michael Ehrmantraut",
          birthday: "Between 1940–1944",
          occupation: [
            "Police Officer",
            "Private Investigator",
            "Ticket Booth Guard",
          ],
          img: "https://static.wikia.nocookie.net/breakingbad/images/4/46/BCS_S6_Portrait_Mike.jpg/revision/latest?cb=20220522174959",
          status: "Deceased",
          appearance: [1, 2, 3, 4, 5, 6],
          firstAppearance: "Uno",
          lastAppearance: "Saul Gone",
          nickname: "Pop Pop",
          portrayed: "Jonathan Banks",
        },
        {
          id: 3,
          hash: "6367d781359b4d0aa083c84b",
          name: "Kim Wexler",
          birthday: "February 13, 1968",
          occupation: [
            "Law student at University of New Mexico (former)",
            "Mailroom clerk at Hamlin, Hamlin & McGill (former)",
            "Associate at HHM (former)",
          ],
          img: "\nhttps://static.wikia.nocookie.net/breakingbad/images/c/c6/BCS_S6_Portrait_Kim.jpg/revision/latest?cb=20220522174923",
          status: "Alive",
          appearance: [1, 2, 3, 4, 5, 6],
          firstAppearance: "Uno",
          lastAppearance: "Saul Gone",
          portrayed: "Rhea Seehorn",
        },
      ];

      const { result } = renderHook(() => useCharactersApi());

      const currentCharacters = await result.current.getCharacters();

      expect(currentCharacters).toStrictEqual(expectedArray);
    });
  });
});
