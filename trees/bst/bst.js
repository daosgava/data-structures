import { tree } from "../data/binaryTree.js";

// Binary Search tree
const bst = (root, target) => {
  if (!root?.value) return false;
  if (root.value === target) return true;

  if (target < root.value) return bst(root.left, target);

  return bst(root.right, target);
};

const target = 15;
console.log(`BST: Does ${target} exist?`, bst(tree.root, target));
