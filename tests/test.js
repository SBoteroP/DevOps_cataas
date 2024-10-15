const axios = require("axios");
const assert = require("assert");

const runTest = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/cat");
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.headers["content-type"], "image/png");
    console.log("Test OK!");
    process.exit(0);
  } catch (error) {
    console.error("Test fallido:", error.message);
    process.exit(1);
  }
};

runTest();
