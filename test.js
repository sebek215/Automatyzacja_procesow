const { add } = require("./index.js");

if (add(4, 9) !== 13) {
  console.error("Test failed: add(4, 9) should be 13");
  process.exit(1);
} else {
  console.log("Test passed: add(4, 9) is 13");
  process.exit(0);
}
