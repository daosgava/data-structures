import assert from "node:assert";
import test, { describe } from "node:test";
import { dfs } from "./dfs.js";
import { tree } from "../data/tree.js";

describe("Depth-First Search", () => {
  test("should find the number 5", () => {
    const target = 5;
    const foundNumber = dfs(tree.root, target);

    assert.strictEqual(foundNumber, true);
  });
});
