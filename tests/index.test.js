const z1p = require("../index");

describe("z1p module test", () => {
  describe("raw", () => {
    test("get one from one country", () => {
      const result = z1p(["ua"]).raw(v => v.zip_code == "59330");
      expect(result).toHaveLength(1);
    });
    test("get one from two", () => {
      const result = z1p(["Ua", "us"]).raw(v => v.zip_code == "59330");
      expect(result).toHaveLength(2);
    });
  });
});
