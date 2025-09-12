// Binary Search tree
export const bst = (root, target) => {
  if (!root?.value) return false;
  if (root.value === target) return true;

  if (target < root.value) return bst(root.left, target);

  return bst(root.right, target);
};
