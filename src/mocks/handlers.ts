import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://better-call-lau.onrender.com/characters/", () => {
    return HttpResponse.json([
      {
        id: 1,
        hash: "6367c33e64f544038d8d9582",
        name: "Jimmy McGill",
        birthday: "November 12, 1960",
        occupation: [
          "Mailroom clerk at Hamlin, Hamlin & McGill",
          "Public Defense Attorney",
        ],
        image:
          "https://cdn.discordapp.com/attachments/1162111119914188901/1169626363280498718/BCS_S6_Portrait_Jimmy.webp?ex=6556166f&is=6543a16f&hm=0318acdbe7203102162223d4c331645a2b4c27c9b1a6baf5ac8a420e172f721c&",
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
        image:
          "https://cdn.discordapp.com/attachments/1162111119914188901/1169626569715757137/BCS_S6_Portrait_Mike_1.webp?ex=655616a0&is=6543a1a0&hm=c6053ce891143a99d97c1bcca168804a7d045372c05fddfe7a0fb2607370943d&",
        status: "Deceased",
        appearance: [1, 2, 3, 4, 5, 6],
        firstAppearance: "Uno",
        lastAppearance: "Saul Gone",
        nickname: "Pop Pop",
        portrayed: "Jonathan Banks",
      },
    ]);
  }),
];
