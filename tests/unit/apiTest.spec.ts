const { main } = require("@/libs/mockapi");

test("mock api test", () => {
  main();
  expect(true).toBe(true);
});
