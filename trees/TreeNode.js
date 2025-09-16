export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static printTree(node, prefix = "", isLeft) {
    if (!node?.value) return;

    const current = "|-";
    console.log(`${prefix}${current}${node.value}`);
    const tab = isLeft ? "|  " : "   ";
    const nextPrefix = prefix + tab;
    TreeNode.printTree(node.left, nextPrefix, true);
    TreeNode.printTree(node.right, nextPrefix, false);
  }
}
