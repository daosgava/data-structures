import { tree } from "../data/tree.js";

// Breadth-First Search
export const bfs = (root, target) => {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.value === target) return true;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
};
