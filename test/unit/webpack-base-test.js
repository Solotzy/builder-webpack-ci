const assert = require("assert");

describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base");

  console.log(baseConfig);

  it("entry", () => {
    assert.equal(baseConfig.entry.index, "E:/SCRM/SCRM/webpack4/my-project/builder-webpack/test/smoke/template/src/index/index.js");
    assert.equal(baseConfig.entry.search, "E:/SCRM/SCRM/webpack4/my-project/builder-webpack/test/smoke/template/src/search/index.js");
  });
});
