//given a root node to a BST, find the kth smallest value in said tree

//helper function to find the total number of notes given a root
function countNodes(root) {
  if (root === null) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}

function kthSmallest(root, k) {
  let left = countNodes(root.left);
  if (left == k - 1) {
    return root;
  }
  //if there are fewer nodes on the left tree than k - 1, that means the value
  //we are looking for is in the right tree
  //so we make the recursive call on the right child as the new root, and subtract the left count from k as well as 1 for the original root
  if (left < k - 1) {
    return kthSmallest(root.right, k - 1 - left);
  } else {
    return kthSmallest(root.left, k);
  }
}

//this problem can also be solved by in-order traversal, taking the first k traversed.
