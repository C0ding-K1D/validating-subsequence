const isValidSubsequence = require("../isValidSubsequence");

describe("isValidSubsequence", () => {
  it("should return true for a valid subsequence", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  it("should return false for an invalid subsequence", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, 10, 19];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  it("should return false for an empty sequence", () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [];
    expect(isValidSubsequence(array, sequence)).toBe(false);
  });

  it("should return true for an empty array and sequence", () => {
    const array = [];
    const sequence = [];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });

  it("should return true for a single-element array and sequence", () => {
    const array = [5];
    const sequence = [5];
    expect(isValidSubsequence(array, sequence)).toBe(true);
  });
});
