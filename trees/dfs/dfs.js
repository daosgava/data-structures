import { tree } from "../data/tree.js";

// Depth-First Search
const dfs = (node, target) => {
  if (!node?.value) return false;
  if (node.value === target) return true;

  return dfs(node.left, target) || dfs(node.right, target);
};

const target = 6;
console.log(`DFS: Does ${target} exist?`, dfs(tree.root, target));
