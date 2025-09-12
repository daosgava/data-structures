import assert from "node:assert";
import test, { describe } from "node:test";
import { bfs } from "./bfs.js";
import { tree } from "../data/tree.js";

describe("Breadth-First Search", () => {
  test("should find the number 5", () => {
    const target = 5;
    const foundNumber = bfs(tree.root, target);

    assert.strictEqual(foundNumber, true);
  });
});
