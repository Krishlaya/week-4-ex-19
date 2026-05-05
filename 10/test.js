import * as utils from "./index.js";

console.log(utils.capitalize("hello"));
console.log(utils.slugify("Hello World 2024"));

console.log(utils.chunk([1, 2, 3, 4, 5], 2));
console.log(utils.range(1, 5));

console.log(utils.clamp(15, 0, 10));

await utils.sleep(500);
console.log("Sleep done");