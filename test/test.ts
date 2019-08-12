import config from "../jest.config.js"
import Mock from "@test/mock"

describe("jest", () => {
  it("resolves path", () => {
    expect(Mock).not.toBe(null);
  })
})
