// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios");
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

async function test() {
  const res = await instance.get("todos/2");
  console.log(res.data);
}

function main() {
  console.log("main");
  test();
}

main();

module.exports = { main };
