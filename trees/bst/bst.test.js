import assert from "node:assert";
import test, { describe } from "node:test";
import { bst } from "./bst.js";
import { tree } from "../data/binaryTree.js";

describe("Binary Search tree", () => {
  test("should find the number 15", () => {
    const target = 15;
    const foundNumber = bst(tree.root, target);

    assert.strictEqual(foundNumber, true);
  });
});
