import "@babel/polyfill";

const { main } = require("@/libs/mockapi");

test("mock api test", () => {
  main()
  console.log('hello');
  expect(true).toBe(true);
  
});
