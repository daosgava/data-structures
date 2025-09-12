// Depth-First Search
export const dfs = (node, target) => {
  if (!node?.value) return false;
  if (node.value === target) return true;

  return dfs(node.left, target) || dfs(node.right, target);
};
