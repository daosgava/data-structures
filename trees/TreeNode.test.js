import assert from "node:assert";
import test, { describe } from "node:test";
import { TreeNode } from "./TreeNode.js";
import { dfs } from "./dfs/dfs.js";
import { bfs } from "./bfs/bfs.js";

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(8);
root.right.right.right = new TreeNode(9);

describe("TreeNode", () => {
  test("dfs with TreeNode. It finds number 7", () => {
    const foundNumber = dfs(root, 7);
    assert.strictEqual(foundNumber, true);
  });

  test("bfs with TreeNode. It doesn't find number 10", () => {
    const foundNumber = bfs(root, 10);
    assert.strictEqual(foundNumber, false);
  });

  test("print tree", () => {
    TreeNode.printTree(root);
  });
});
