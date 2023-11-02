import { http, HttpResponse } from "msw";

const allPosts = new Map();

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
    ]);
  }),

  http.post("/posts", async ({ request }) => {
    const newPost = await request.json();
    allPosts.set(newPost.id, newPost);

    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!

    return HttpResponse.json(newPost, { status: 201 });
  }),

  http.delete("/posts/:id", ({ params }) => {
    // All request path params are provided in the "params"
    // argument of the response resolver.
    const { id } = params;

    // Let's attempt to grab the post by its ID.
    const deletedPost = allPosts.get(id);

    // Respond with a "404 Not Found" response if the given
    // post ID does not exist.
    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 });
    }

    // Delete the post from the "allPosts" map.
    allPosts.delete(id);

    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(deletedPost);
  }),
];
